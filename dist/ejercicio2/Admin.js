"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin extends User_1.User {
    constructor(name, email, department) {
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
    getRole() {
        return "Administrador";
    }
    // Método específico de Admin
    manageUsers() {
        console.log(`   ${this.name} está gestionando usuarios del departamento ${this.department}`);
    }
    // Método para mostrar permisos
    showPermissions() {
        console.log(`   Permisos:`, this.permissions);
    }
    // Sobrescribir displayInfo para agregar información específica
    displayInfo() {
        super.displayInfo(); // Llamar al método de la clase padre
        console.log(`   Departamento: ${this.department}`);
        this.showPermissions();
    }
}
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map