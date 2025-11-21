import { User } from "./User";
import { IPermissions } from "./interfaces/IPermisos.interfaces";

export class Admin extends User {
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