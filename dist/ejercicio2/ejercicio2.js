"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const Admin_1 = require("./Admin");
const Client_1 = require("./Client");
const readline = __importStar(require("readline"));
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function pregunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
}
async function ejecutarEjercicio() {
    // DEMOSTRACIÓN DE USO
    console.log("Ejercicio 2:\n");
    // Crear administrador
    console.log("=== Creando Administrador ===");
    const admin = new Admin_1.Admin("Carlos Rodríguez", "carlos@empresa.com", "IT");
    admin.displayInfo();
    admin.manageUsers();
    console.log();
    // Crear cliente regular solicitando datos por consola
    console.log("=== Creando Cliente ===");
    const nombreCliente1 = await pregunta("Ingrese el nombre del cliente: ");
    const emailCliente1 = await pregunta("Ingrese el email del cliente: ");
    const client1 = new Client_1.Client(nombreCliente1, emailCliente1);
    client1.displayInfo();
    console.log();
    // Cliente realiza compras
    console.log("=== Cliente Realizando Compras ===");
    const compra1 = await pregunta("Ingrese el monto de la primera compra: ");
    client1.makePurchase(parseFloat(compra1));
    const compra2 = await pregunta("Ingrese el monto de la segunda compra: ");
    client1.makePurchase(parseFloat(compra2));
    console.log();
    // Mostrar información actualizada
    console.log("=== Estado Actual del Cliente ===");
    client1.displayInfo();
    console.log();
    // Cliente realiza más compras y se vuelve VIP
    console.log("=== Cliente Alcanza Estado VIP ===");
    const compra3 = await pregunta("Ingrese el monto de la tercera compra: ");
    client1.makePurchase(parseFloat(compra3));
    console.log();
    client1.displayInfo();
    console.log();
    // Demostrar polimorfismo - array de diferentes tipos de usuarios
    console.log("=== Polimorfismo: Lista de Usuarios ===");
    // Solicitar datos del segundo cliente
    console.log("\nIngrese datos del segundo cliente:");
    const nombreCliente2 = await pregunta("Nombre: ");
    const emailCliente2 = await pregunta("Email: ");
    const usuarios = [
        new Admin_1.Admin("María López", "maria@empresa.com", "Ventas"),
        new Client_1.Client(nombreCliente2, emailCliente2),
        new Admin_1.Admin("Juan Pérez", "juan@empresa.com", "Marketing"),
        client1
    ];
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. ${usuario.getRole()}: ${usuario.getInfo()}`);
    });
    rl.close();
}
ejecutarEjercicio();
//# sourceMappingURL=ejercicio2.js.map