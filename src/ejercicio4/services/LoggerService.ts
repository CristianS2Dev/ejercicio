/**
 * PRINCIPIO S - Single Responsibility
 * 
 * Esta clase tiene UNA sola responsabilidad: registrar logs
 * No maneja persistencia de datos ni lógica de negocio
 */

export enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    DEBUG = "DEBUG"
}

export class LoggerService {
    private logs: string[];

    constructor() {
        this.logs = [];
    }

    public log(message: string, level: LogLevel = LogLevel.INFO): void {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}`;
        this.logs.push(logEntry);
        this.printLog(logEntry, level);
    }

    private printLog(logEntry: string, level: LogLevel): void {
        const emoji = this.getEmojiForLevel(level);
        console.log(`${emoji} ${logEntry}`);
    }

    private getEmojiForLevel(level: LogLevel): string {
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

    public info(message: string): void {
        this.log(message, LogLevel.INFO);
    }

    public warning(message: string): void {
        this.log(message, LogLevel.WARNING);
    }

    public error(message: string): void {
        this.log(message, LogLevel.ERROR);
    }

    public debug(message: string): void {
        this.log(message, LogLevel.DEBUG);
    }

    public getLogs(): string[] {
        return [...this.logs];
    }

    public clearLogs(): void {
        this.logs = [];
    }
}
