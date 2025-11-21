export class User {
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