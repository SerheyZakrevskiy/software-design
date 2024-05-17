const SmartTextChecker = require('./SmartTextChecker');
const SmartTextReaderLocker = require('./SmartTextReaderLocker');

(async () => {
    const filePath = 'example.txt';

    try {
        const readerChecker = new SmartTextChecker(filePath);
        const contentChecker = await readerChecker.read();

        const pattern = /.*restricted.*/;
        const readerLocker = new SmartTextReaderLocker(filePath, pattern);
        const contentLocker = await readerLocker.read();

    } catch (error) {
        console.error(error);
    }
})();
