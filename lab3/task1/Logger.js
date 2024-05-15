class Logger {
    log(message) {
      console.log(`%c${message}`, 'color: green');
    }

    error(message) {
      console.error(`%c${message}`, 'color: red');
    }

    warn(message) {
      console.warn(`%c${message}`, 'color: orange');
    }
  }


  class FileWriter {
    write(message) {
      console.log(`Writing message: ${message}`);
    }
  
    writeLine(message) {
      console.log(`Writing message: ${message}`);
    }
  }
  

  class FileLoggerAdapter {
    constructor(fileWriter) {
      this.fileWriter = fileWriter;
    }
  
    log(message) {
      this.fileWriter.write(`[LOG] ${message}`);
    }
  
    error(message) {
      this.fileWriter.write(`[ERROR] ${message}`);
    }
  
    warn(message) {
      this.fileWriter.write(`[WARNING] ${message}`);
    }
  }

  const logger = new Logger();
  logger.log('This is a log message');
  logger.error('This is an error message');
  logger.warn('This is a warning message');
  
  const fileWriter = new FileWriter();
  const fileLoggerAdapter = new FileLoggerAdapter(fileWriter);
  fileLoggerAdapter.log('This is a log message');
  fileLoggerAdapter.error('This is an error message');
  fileLoggerAdapter.warn('This is a warning message');
  

  console.log('%cЦе червоний текст', 'color: red');
  console.log('%cЦе червоний текст', 'color: red; font-weight: bold');
  console.log('\x1b[31m%s\x1b[0m', 'Це червоний текст');
