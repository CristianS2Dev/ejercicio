import { User } from "./User";
import { Admin } from "./Admin";
import { Client } from "./Client";
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(texto: string): Promise<string> {
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
    const admin = new Admin("Carlos Rodríguez", "carlos@empresa.com", "IT");
    admin.displayInfo();
    admin.manageUsers();
    console.log();

    // Crear cliente regular solicitando datos por consola
    console.log("=== Creando Cliente ===");
    const nombreCliente1 = await pregunta("Ingrese el nombre del cliente: ");
    const emailCliente1 = await pregunta("Ingrese el email del cliente: ");
    const client1 = new Client(nombreCliente1, emailCliente1);
    client1.displayInfo();
    console.log();

    // compras
    console.log("=== Cliente Realizando Compras ===");
    const compra1 = await pregunta("Ingrese el monto de la primera compra: ");
    client1.makePurchase(parseFloat(compra1));
    const compra2 = await pregunta("Ingrese el monto de la segunda compra: ");
    client1.makePurchase(parseFloat(compra2));
    console.log();

    // información 
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
    
    const usuarios: User[] = [
        new Admin("María López", "maria@empresa.com", "Ventas"),
        new Client(nombreCliente2, emailCliente2),
        new Admin("Juan Pérez", "juan@empresa.com", "Marketing"),
        client1
    ];

    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. ${usuario.getRole()}: ${usuario.getInfo()}`);
    });

    rl.close();
}

ejecutarEjercicio();
