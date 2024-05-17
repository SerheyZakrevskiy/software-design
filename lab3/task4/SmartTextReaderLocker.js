const SmartTextReader = require('./SmartTextReader');

class SmartTextReaderLocker extends SmartTextReader {
    constructor(filePath, regex) {
        super(filePath);
        this.regex = regex;
    }

    async read() {
        if (this.regex.test(this.filePath)) {
            console.log('Access denied!');
            return [];
        } else {
            return await super.read();
        }
    }
}

module.exports = SmartTextReaderLocker;
