/**
 * EJERCICIO 2: Jerarquía de Usuarios con POO
 * 
 * Objetivo: Aplicar herencia, polimorfismo e interfaces
 */

// Interfaz para permisos
interface IPermissions {
    canEdit: boolean;
    canDelete: boolean;
    canCreate: boolean;
    canView: boolean;
}

// Interfaz para información de compras
interface IPurchaseInfo {
    totalPurchases: number;
    totalSpent: number;
}

/**
 * Clase base User
 * Contiene propiedades y métodos comunes a todos los usuarios
 */
class User {
    protected name: string;
    protected email: string;
    protected createdAt: Date;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }

    // Método común para todos los usuarios
    getInfo(): string {
        return `${this.name} (${this.email})`;
    }

    // Método abstracto que cada subclase implementará diferente (polimorfismo)
    getRole(): string {
        return "Usuario";
    }

    // Método para mostrar información completa
    displayInfo(): void {
        console.log(`👤 ${this.getRole()}: ${this.getInfo()}`);
        console.log(`   Fecha de registro: ${this.createdAt.toLocaleDateString()}`);
    }
}

/**
 * Clase Admin - Usuario con permisos administrativos
 */
class Admin extends User {
    private permissions: IPermissions;
    private department: string;

    constructor(name: string, email: string, department: string) {
        super(name, email); // Llamar al constructor de User
        this.department = department;
        // Admin tiene todos los permisos
        this.permissions = {
            canEdit: true,
            canDelete: true,
            canCreate: true,
            canView: true
        };
    }

    // Sobrescribir método getRole (polimorfismo)
    getRole(): string {
        return "Administrador";
    }

    // Método específico de Admin
    manageUsers(): void {
        console.log(`   ${this.name} está gestionando usuarios del departamento ${this.department}`);
    }

    // Método para mostrar permisos
    showPermissions(): void {
        console.log(`   Permisos:`, this.permissions);
    }

    // Sobrescribir displayInfo para agregar información específica
    displayInfo(): void {
        super.displayInfo(); // Llamar al método de la clase padre
        console.log(`   Departamento: ${this.department}`);
        this.showPermissions();
    }
}

/**
 * Clase Client - Usuario cliente con información de compras
 */
class Client extends User {
    private purchaseInfo: IPurchaseInfo;
    private loyaltyPoints: number;
    private isVIP: boolean;

    constructor(name: string, email: string) {
        super(name, email);
        this.purchaseInfo = {
            totalPurchases: 0,
            totalSpent: 0
        };
        this.loyaltyPoints = 0;
        this.isVIP = false;
    }

    // Sobrescribir método getRole
    getRole(): string {
        return this.isVIP ? "Cliente VIP" : "Cliente";
    }

    // Método específico de Client
    makePurchase(amount: number): void {
        this.purchaseInfo.totalPurchases++;
        this.purchaseInfo.totalSpent += amount;
        this.loyaltyPoints += Math.floor(amount / 10); // 1 punto por cada $10
        
        // Actualizar estado VIP si gasta más de $1000
        if (this.purchaseInfo.totalSpent >= 1000) {
            this.isVIP = true;
        }

        console.log(`   💰 ${this.name} realizó una compra de $${amount}`);
        console.log(`   Puntos ganados: ${Math.floor(amount / 10)}`);
    }

    // Método para obtener descuento según sea VIP
    getDiscount(): number {
        return this.isVIP ? 20 : 5;
    }

    // Mostrar historial de compras
    showPurchaseHistory(): void {
        console.log(`   Compras totales: ${this.purchaseInfo.totalPurchases}`);
        console.log(`   Total gastado: $${this.purchaseInfo.totalSpent}`);
        console.log(`   Puntos de lealtad: ${this.loyaltyPoints}`);
        console.log(`   Descuento actual: ${this.getDiscount()}%`);
    }

    // Sobrescribir displayInfo
    displayInfo(): void {
        super.displayInfo();
        this.showPurchaseHistory();
    }
}

// DEMOSTRACIÓN DE USO
console.log("👥 EJERCICIO 2: Jerarquía de Usuarios\n");

// Crear administrador
console.log("=== Creando Administrador ===");
const admin = new Admin("Carlos Rodríguez", "carlos@empresa.com", "IT");
admin.displayInfo();
admin.manageUsers();
console.log();

// Crear cliente regular
console.log("=== Creando Cliente ===");
const client1 = new Client("Ana García", "ana@email.com");
client1.displayInfo();
console.log();

// Cliente realiza compras
console.log("=== Cliente Realizando Compras ===");
client1.makePurchase(250);
client1.makePurchase(450);
console.log();

// Mostrar información actualizada
console.log("=== Estado Actual del Cliente ===");
client1.displayInfo();
console.log();

// Cliente realiza más compras y se vuelve VIP
console.log("=== Cliente Alcanza Estado VIP ===");
client1.makePurchase(500);
console.log();
client1.displayInfo();
console.log();

// Demostrar polimorfismo - array de diferentes tipos de usuarios
console.log("=== Polimorfismo: Lista de Usuarios ===");
const usuarios: User[] = [
    new Admin("María López", "maria@empresa.com", "Ventas"),
    new Client("Pedro Martínez", "pedro@email.com"),
    new Admin("Juan Pérez", "juan@empresa.com", "Marketing"),
    new Client("Laura Sánchez", "laura@email.com")
];

usuarios.forEach((usuario, index) => {
    console.log(`${index + 1}. ${usuario.getRole()}: ${usuario.getInfo()}`);
});
