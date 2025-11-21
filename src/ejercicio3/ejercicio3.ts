/**
 * EJERCICIO 3: Sistema de Login con Manejo de Errores
 * 
 * Objetivo: Dominar try/catch y crear excepciones personalizadas
 */

// ===============================
// CLASES DE ERRORES PERSONALIZADAS
// ===============================

/**
 * Error cuando el usuario no existe en el sistema
 */
class UserNotFoundError extends Error {
    constructor(username: string) {
        super(`Usuario '${username}' no encontrado en el sistema`);
        this.name = "UserNotFoundError";
    }
}

/**
 * Error cuando la contraseña es incorrecta
 */
class InvalidPasswordError extends Error {
    public attempts: number;

    constructor(username: string, attempts: number) {
        super(`Contraseña incorrecta para el usuario '${username}'`);
        this.name = "InvalidPasswordError";
        this.attempts = attempts;
    }
}

/**
 * Error cuando la cuenta está bloqueada
 */
class AccountLockedError extends Error {
    constructor(username: string) {
        super(`La cuenta '${username}' está bloqueada por múltiples intentos fallidos`);
        this.name = "AccountLockedError";
    }
}

// ===============================
// INTERFACES Y TIPOS
// ===============================

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

enum LoginStatus {
    SUCCESS = "SUCCESS",
    USER_NOT_FOUND = "USER_NOT_FOUND",
    INVALID_PASSWORD = "INVALID_PASSWORD",
    ACCOUNT_LOCKED = "ACCOUNT_LOCKED"
}

// ===============================
// SISTEMA DE AUTENTICACIÓN
// ===============================

class AuthenticationSystem {
    private users: Map<string, IUser>;
    private readonly MAX_ATTEMPTS = 3;

    constructor() {
        this.users = new Map();
        this.initializeUsers();
    }

    /**
     * Inicializa algunos usuarios de prueba
     */
    private initializeUsers(): void {
        this.addUser("admin", "admin123", "[email protected]");
        this.addUser("user1", "password123", "[email protected]");
        this.addUser("user2", "pass456", "[email protected]");
    }

    /**
     * Agrega un nuevo usuario al sistema
     */
    public addUser(username: string, password: string, email: string): void {
        const user: IUser = {
            username,
            password,
            email,
            isLocked: false,
            failedAttempts: 0
        };
        this.users.set(username, user);
    }

    /**
     * Intenta realizar login
     * Lanza excepciones específicas según el error
     */
    public login(username: string, password: string): ILoginResult {
        // Verificar si el usuario existe
        const user = this.users.get(username);
        if (!user) {
            throw new UserNotFoundError(username);
        }

        // Verificar si la cuenta está bloqueada
        if (user.isLocked) {
            throw new AccountLockedError(username);
        }

        // Verificar contraseña
        if (user.password !== password) {
            user.failedAttempts++;
            
            // Bloquear cuenta si se exceden los intentos
            if (user.failedAttempts >= this.MAX_ATTEMPTS) {
                user.isLocked = true;
                throw new AccountLockedError(username);
            }

            throw new InvalidPasswordError(username, user.failedAttempts);
        }

        // Login exitoso - resetear intentos fallidos
        user.failedAttempts = 0;

        return {
            success: true,
            message: `Bienvenido, ${username}!`,
            user: user
        };
    }

    /**
     * Desbloquea una cuenta (requeriría autenticación administrativa en producción)
     */
    public unlockAccount(username: string): boolean {
        const user = this.users.get(username);
        if (user && user.isLocked) {
            user.isLocked = false;
            user.failedAttempts = 0;
            return true;
        }
        return false;
    }

    /**
     * Muestra todos los usuarios registrados (solo para demostración)
     */
    public listUsers(): void {
        console.log("\n📋 Usuarios Registrados:");
        this.users.forEach(user => {
            const status = user.isLocked ? "🔒 BLOQUEADO" : "✅ ACTIVO";
            console.log(`   - ${user.username} (${user.email}) - ${status}`);
        });
        console.log();
    }
}

// ===============================
// FUNCIONES DE UTILIDAD
// ===============================

/**
 * Intenta hacer login y maneja todos los posibles errores
 */
function intentarLogin(
    authSystem: AuthenticationSystem,
    username: string,
    password: string
): void {
    console.log(`\n🔐 Intentando login con usuario: "${username}"`);
    
    try {
        const result = authSystem.login(username, password);
        console.log(`✅ ${result.message}`);
        console.log(`   Email: ${result.user?.email}`);
    } catch (error: any) {
        // Manejar diferentes tipos de errores
        if (error instanceof UserNotFoundError) {
            console.log(`❌ ${error.message}`);
            console.log(`   Sugerencia: Verifica que el nombre de usuario sea correcto`);
        } else if (error instanceof InvalidPasswordError) {
            console.log(`❌ ${error.message}`);
            console.log(`   Intentos fallidos: ${error.attempts}/${3}`);
            if (error.attempts < 3) {
                console.log(`   Intentos restantes: ${3 - error.attempts}`);
            }
        } else if (error instanceof AccountLockedError) {
            console.log(`🔒 ${error.message}`);
            console.log(`   Contacta al administrador para desbloquear tu cuenta`);
        } else {
            console.log(`❌ Error inesperado: ${error.message}`);
        }
    }
}

// ===============================
// DEMOSTRACIÓN DEL SISTEMA
// ===============================

console.log("🔐 EJERCICIO 3: Sistema de Login con Manejo de Errores\n");

const authSystem = new AuthenticationSystem();

// Mostrar usuarios disponibles
authSystem.listUsers();

// Escenario 1: Login exitoso
console.log("=== Escenario 1: Login Exitoso ===");
intentarLogin(authSystem, "admin", "admin123");

// Escenario 2: Usuario no existe
console.log("\n=== Escenario 2: Usuario No Existe ===");
intentarLogin(authSystem, "usuarioInexistente", "cualquierPassword");

// Escenario 3: Contraseña incorrecta (varios intentos)
console.log("\n=== Escenario 3: Contraseña Incorrecta ===");
intentarLogin(authSystem, "user1", "incorrecta1");
intentarLogin(authSystem, "user1", "incorrecta2");
intentarLogin(authSystem, "user1", "incorrecta3");

// Escenario 4: Intento de login con cuenta bloqueada
console.log("\n=== Escenario 4: Cuenta Bloqueada ===");
intentarLogin(authSystem, "user1", "password123");

// Escenario 5: Desbloquear cuenta y login exitoso
console.log("\n=== Escenario 5: Desbloquear y Login Exitoso ===");
if (authSystem.unlockAccount("user1")) {
    console.log("🔓 Cuenta desbloqueada exitosamente");
}
intentarLogin(authSystem, "user1", "password123");

// Mostrar estado final de usuarios
authSystem.listUsers();
