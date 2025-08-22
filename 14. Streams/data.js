import * as fs from 'fs';

for (let i = 0; i < 10000; i++) {
    fs.appendFileSync('./example.txt', i + '\n');
}
