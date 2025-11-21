"use strict";
/**
 * PRINCIPIO S - Single Responsibility
 *
 * Esta clase tiene UNA sola responsabilidad: registrar logs
 * No maneja persistencia de datos ni lógica de negocio
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = exports.LogLevel = void 0;
var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["DEBUG"] = "DEBUG";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
class LoggerService {
    constructor() {
        this.logs = [];
    }
    log(message, level = LogLevel.INFO) {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}`;
        this.logs.push(logEntry);
        this.printLog(logEntry, level);
    }
    printLog(logEntry, level) {
        const emoji = this.getEmojiForLevel(level);
        console.log(`${emoji} ${logEntry}`);
    }
    getEmojiForLevel(level) {
        switch (level) {
            case LogLevel.INFO:
                return "Information";
            case LogLevel.WARNING:
                return "Warning";
            case LogLevel.ERROR:
                return "Error";
            case LogLevel.DEBUG:
                return "Debug";
        }
    }
    info(message) {
        this.log(message, LogLevel.INFO);
    }
    warning(message) {
        this.log(message, LogLevel.WARNING);
    }
    error(message) {
        this.log(message, LogLevel.ERROR);
    }
    debug(message) {
        this.log(message, LogLevel.DEBUG);
    }
    getLogs() {
        return [...this.logs];
    }
    clearLogs() {
        this.logs = [];
    }
}
exports.LoggerService = LoggerService;
//# sourceMappingURL=LoggerService.js.map