"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.createdAt = new Date();
    }
    // Método común para todos los usuarios
    getInfo() {
        return `${this.name} (${this.email})`;
    }
    // Método abstracto que cada subclase implementará diferente (polimorfismo)
    getRole() {
        return "Usuario";
    }
    // Método para mostrar información completa
    displayInfo() {
        console.log(`👤 ${this.getRole()}: ${this.getInfo()}`);
        console.log(`   Fecha de registro: ${this.createdAt.toLocaleDateString()}`);
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map