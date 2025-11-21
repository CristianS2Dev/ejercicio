"use strict";
/**
 * PRINCIPIO D - Dependency Inversion
 * PRINCIPIO S - Single Responsibility
 *
 * Gestiona alertas inyectando la dependencia de notificación
 * Depende de la abstracción (INotificationService), no de implementaciones concretas
 * Su única responsabilidad es gestionar alertas
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertManager = void 0;
class AlertManager {
    // Dependemos de la interfaz, no de implementaciones concretas
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    notifyMaintenanceScheduled(maintenance, contacto) {
        const message = `Mantenimiento programado: ${maintenance.getInfo()}`;
        this.notificationService.send(contacto, message);
    }
    notifyMaintenanceCompleted(maintenance, contacto) {
        const message = `Mantenimiento completado: ${maintenance.getInfo()}`;
        this.notificationService.send(contacto, message);
    }
    notifyUrgentMaintenance(machineId, problem, contacto) {
        const message = `URGENTE: Máquina ${machineId} requiere atención - ${problem}`;
        this.notificationService.send(contacto, message);
    }
    // Podemos cambiar el servicio de notificación en tiempo de ejecución
    changeNotificationService(newService) {
        this.notificationService = newService;
        console.log(`\n🔄 Servicio de notificación cambiado a: ${newService.getServiceName()}`);
    }
}
exports.AlertManager = AlertManager;
//# sourceMappingURL=AlertManager.js.map