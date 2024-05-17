const SmartTextReader = require('./SmartTextReader');

class SmartTextChecker extends SmartTextReader {
    async read() {
        console.log(`Opening file: ${this.filePath}`);
        const content = await super.read();
        console.log('File read successfully.');
        console.log('File closed.');

        const totalLines = content.length;
        const totalChars = content.reduce((sum, line) => sum + line.length, 0);

        console.log(`Total lines: ${totalLines}`);
        console.log(`Total characters: ${totalChars}`);

        return content;
    }
}

module.exports = SmartTextChecker;
