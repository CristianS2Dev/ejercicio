"use strict";
// EJERCICIO 4: Gestor de Mantenimientos SOLID
Object.defineProperty(exports, "__esModule", { value: true });
const MachineRepository_1 = require("./services/MachineRepository");
const LoggerService_1 = require("./services/LoggerService");
const EmailNotification_1 = require("./services/EmailNotification");
const SMSNotification_1 = require("./services/SMSNotification");
const AlertManager_1 = require("./services/AlertManager");
const Machine_1 = require("./models/Machine");
const PreventiveMaintenance_1 = require("./models/PreventiveMaintenance");
const CorrectiveMaintenance_1 = require("./models/CorrectiveMaintenance");
console.log(" EJERCICIO 4: Gestor de Mantenimientos SOLID\n");
console.log("Demostrando los 5 principios SOLID en acción\n");
console.log("=".repeat(60));
// PRINCIPIO S - Single Responsibility
console.log("\n PRINCIPIO S - Single Responsibility");
console.log("Cada clase tiene una única responsabilidad\n");
const logger = new LoggerService_1.LoggerService();
logger.info("Sistema de mantenimientos iniciado");
const machineRepo = new MachineRepository_1.MachineRepository();
// PRINCIPIO O - Open/Closed & PRINCIPIO L - Liskov Substitution
console.log("\n PRINCIPIO O - Open/Closed");
console.log(" PRINCIPIO L - Liskov Substitution");
console.log("Las clases están abiertas a extensión pero cerradas a modificación");
console.log("Las subclases pueden sustituir a la clase base\n");
const maquina1 = new Machine_1.ProductionMachine("PROD-001", "Torno CNC");
const maquina2 = new Machine_1.ProductionMachine("PROD-002", "Fresadora");
const maquina3 = new Machine_1.MonitoringMachine("MON-001", "Sistema de Sensores");
maquina1.setStatus(Machine_1.MachineStatus.OPERATIONAL);
maquina2.setStatus(Machine_1.MachineStatus.OPERATIONAL);
maquina3.setStatus(Machine_1.MachineStatus.OPERATIONAL);
machineRepo.save(maquina1);
machineRepo.save(maquina2);
machineRepo.save(maquina3);
logger.info(`${machineRepo.count()} máquinas registradas`);
const mantenimientos = [
    new PreventiveMaintenance_1.PreventiveMaintenance("PROD-001", "Mantenimiento mensual", new Date(), "mensual", ["Revisar lubricación", "Inspeccionar herramientas", "Calibrar ejes"]),
    new CorrectiveMaintenance_1.CorrectiveMaintenance("PROD-002", "Falla en el motor", CorrectiveMaintenance_1.Severity.HIGH, new Date(), ["Motor nuevo", "Correa de transmisión"])
];
// PRINCIPIO I - Interface Segregation
console.log("\n PRINCIPIO I - Interface Segregation");
console.log("Las interfaces son pequeñas y específicas\n");
console.log("Maquina de Producción (IRunnable + ICleanable):");
maquina1.run();
maquina1.stop();
maquina1.clean();
console.log("\nMaquina de Monitoreo (solo IRunnable):");
maquina3.run();
maquina3.stop();
// PRINCIPIO D - Dependency Inversion
console.log("\n PRINCIPIO D - Dependency Inversion");
console.log("Dependemos de abstracciones, no de implementaciones concretas\n");
const emailService = new EmailNotification_1.EmailNotification();
const smsService = new SMSNotification_1.SMSNotification();
let alertManager = new AlertManager_1.AlertManager(emailService);
console.log("\n" + "=".repeat(60));
console.log("EJECUTANDO MANTENIMIENTOS");
console.log("=".repeat(60));
mantenimientos.forEach((mantenimiento, index) => {
    console.log(`\n--- Mantenimiento ${index + 1} ---`);
    logger.info(`Iniciando ${mantenimiento.getInfo()}`);
    // Notificar que se programó
    alertManager.notifyMaintenanceScheduled(mantenimiento, "[email protected]");
    // Ejecutar mantenimiento
    mantenimiento.execute();
    // Notificar completado
    alertManager.notifyMaintenanceCompleted(mantenimiento, "[email protected]");
    logger.info(`Completado en ${mantenimiento.getEstimatedDuration()} horas`);
});
// Demostrar cambio de servicio de notificación (Dependency Inversion)
console.log("\n" + "=".repeat(60));
console.log("CAMBIO DE SERVICIO DE NOTIFICACIÓN");
console.log("=".repeat(60));
alertManager.changeNotificationService(smsService);
alertManager.notifyUrgentMaintenance("PROD-003", "Sobrecalentamiento crítico", "+57 3005104130");
// Mostrar logs finales
console.log("\n" + "=".repeat(60));
console.log("RESUMEN DEL SISTEMA");
console.log("=".repeat(60));
console.log("\n Máquinas en el sistema:");
machineRepo.findAll().forEach(m => {
    console.log(`   - ${m.getInfo()}`);
});
console.log("\n Logs del sistema:");
const logs = logger.getLogs();
console.log(`   Total de logs: ${logs.length}`);
logs.slice(-5).forEach(log => console.log(`   ${log}`));
console.log("\n Sistema de mantenimientos SOLID completado exitosamente!");
//# sourceMappingURL=main.js.map