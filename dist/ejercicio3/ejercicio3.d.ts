/**
 * EJERCICIO 3: Sistema de Login con Manejo de Errores
 *
 * Objetivo: Dominar try/catch y crear excepciones personalizadas
 */
/**
 * Error cuando el usuario no existe en el sistema
 */
declare class UserNotFoundError extends Error {
    constructor(username: string);
}
/**
 * Error cuando la contraseña es incorrecta
 */
declare class InvalidPasswordError extends Error {
    attempts: number;
    constructor(username: string, attempts: number);
}
/**
 * Error cuando la cuenta está bloqueada
 */
declare class AccountLockedError extends Error {
    constructor(username: string);
}
interface IUser {
    username: string;
    password: string;
    email: string;
    isLocked: boolean;
    failedAttempts: number;
}
interface ILoginResult {
    success: boolean;
    message: string;
    user?: IUser;
}
declare enum LoginStatus {
    SUCCESS = "SUCCESS",
    USER_NOT_FOUND = "USER_NOT_FOUND",
    INVALID_PASSWORD = "INVALID_PASSWORD",
    ACCOUNT_LOCKED = "ACCOUNT_LOCKED"
}
declare class AuthenticationSystem {
    private users;
    private readonly MAX_ATTEMPTS;
    constructor();
    /**
     * Inicializa algunos usuarios de prueba
     */
    private initializeUsers;
    /**
     * Agrega un nuevo usuario al sistema
     */
    addUser(username: string, password: string, email: string): void;
    /**
     * Intenta realizar login
     * Lanza excepciones específicas según el error
     */
    login(username: string, password: string): ILoginResult;
    /**
     * Desbloquea una cuenta (requeriría autenticación administrativa en producción)
     */
    unlockAccount(username: string): boolean;
    /**
     * Muestra todos los usuarios registrados (solo para demostración)
     */
    listUsers(): void;
}
/**
 * Intenta hacer login y maneja todos los posibles errores
 */
declare function intentarLogin(authSystem: AuthenticationSystem, username: string, password: string): void;
declare const authSystem: AuthenticationSystem;
//# sourceMappingURL=ejercicio3.d.ts.map