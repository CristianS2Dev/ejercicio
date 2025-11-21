"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const User_1 = require("./User");
class Admin extends User_1.User {
    constructor(name, email, department) {
        super(name, email);
        this.department = department;
        this.permissions = {
            canEdit: true,
            canDelete: true,
            canCreate: true,
            canView: true
        };
    }
    getRole() {
        return "Administrador";
    }
    manageUsers() {
        console.log(`   ${this.name} está gestionando usuarios del departamento ${this.department}`);
    }
    showPermissions() {
        console.log(`   Permisos:`, this.permissions);
    }
    displayInfo() {
        super.displayInfo();
        console.log(`   Departamento: ${this.department}`);
        this.showPermissions();
    }
}
exports.Admin = Admin;
//# sourceMappingURL=Admin.js.map