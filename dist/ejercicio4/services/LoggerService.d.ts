/**
 * PRINCIPIO S - Single Responsibility
 *
 * Esta clase tiene UNA sola responsabilidad: registrar logs
 * No maneja persistencia de datos ni lógica de negocio
 */
export declare enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR",
    DEBUG = "DEBUG"
}
export declare class LoggerService {
    private logs;
    constructor();
    log(message: string, level?: LogLevel): void;
    private printLog;
    private getEmojiForLevel;
    info(message: string): void;
    warning(message: string): void;
    error(message: string): void;
    debug(message: string): void;
    getLogs(): string[];
    clearLogs(): void;
}
//# sourceMappingURL=LoggerService.d.ts.map