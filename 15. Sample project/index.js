// Sample project: Task Manager API

import http from 'http';
import fs from 'fs/promises';

const PORT = 3000;
const DATA_FILE = './tasks.json';

// Helper function to read tasks
const readTasks = async () => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        return JSON.parse(data);
    } catch {
        return [];
    }
};

// Helper function to write tasks
const writeTasks = async (tasks) => {
    await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
};

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    if (url === '/tasks' && method === 'GET') {
        // Get all tasks
        const tasks = await readTasks();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(tasks));
    } else if (url === '/tasks' && method === 'POST') {
        // Create a new task
        let body = '';
        req.on('data', (chunk) => (body += chunk));
        req.on('end', async () => {
            const { title } = JSON.parse(body);
            const tasks = await readTasks();
            const newTask = { id: Date.now(), title };
            tasks.push(newTask);
            await writeTasks(tasks);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newTask));
        });
    } else if (url.startsWith('/tasks/') && method === 'DELETE') {
        // Delete a task
        const id = parseInt(url.split('/')[2], 10);
        const tasks = await readTasks();
        const filteredTasks = tasks.filter((task) => task.id !== id);
        await writeTasks(filteredTasks);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Task deleted' }));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
