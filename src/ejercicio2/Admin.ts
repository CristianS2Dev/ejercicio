import { User } from "./User";
import { IPermissions } from "./interfaces/IPermisos.interfaces";

export class Admin extends User {
    private permissions: IPermissions;
    private department: string;

    constructor(name: string, email: string, department: string) {
        super(name, email); 
        this.department = department;

        this.permissions = {
            canEdit: true,
            canDelete: true,
            canCreate: true,
            canView: true
        };
    }

    getRole(): string {
        return "Administrador";
    }

    manageUsers(): void {
        console.log(`   ${this.name} está gestionando usuarios del departamento ${this.department}`);
    }


    showPermissions(): void {
        console.log(`   Permisos:`, this.permissions);
    }

    displayInfo(): void {
        super.displayInfo(); 
        console.log(`   Departamento: ${this.department}`);
        this.showPermissions();
    }
}