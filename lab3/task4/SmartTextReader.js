const fs = require('fs');

class SmartTextReader {
    constructor(filePath) {
        this.filePath = filePath;
    }

    read() {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                const lines = data.split('\n').map(line => line.split(''));
                resolve(lines);
            });
        });
    }
}

module.exports = SmartTextReader;
