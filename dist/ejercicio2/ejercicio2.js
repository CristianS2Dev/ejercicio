"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./Admin");
const Client_1 = require("./Client");
// DEMOSTRACIÓN DE USO
console.log("Ejercicio 2:\n");
// Crear administrador
console.log("=== Creando Administrador ===");
const admin = new Admin_1.Admin("Carlos Rodríguez", "carlos@empresa.com", "IT");
admin.displayInfo();
admin.manageUsers();
console.log();
// Crear cliente regular
console.log("=== Creando Cliente ===");
const client1 = new Client_1.Client("Ana García", "ana@email.com");
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
const usuarios = [
    new Admin_1.Admin("María López", "maria@empresa.com", "Ventas"),
    new Client_1.Client("Pedro Martínez", "pedro@email.com"),
    new Admin_1.Admin("Juan Pérez", "juan@empresa.com", "Marketing"),
    new Client_1.Client("Laura Sánchez", "laura@email.com")
];
usuarios.forEach((usuario, index) => {
    console.log(`${index + 1}. ${usuario.getRole()}: ${usuario.getInfo()}`);
});
//# sourceMappingURL=ejercicio2.js.map