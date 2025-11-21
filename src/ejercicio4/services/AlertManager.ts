/**
 * PRINCIPIO D - Dependency Inversion
 * PRINCIPIO S - Single Responsibility
 * 
 * Gestiona alertas inyectando la dependencia de notificación
 * Depende de la abstracción (INotificationService), no de implementaciones concretas
 * Su única responsabilidad es gestionar alertas
 */

import { INotificationService } from "../interfaces/INotificationService";
import { Maintenance } from "../models/Maintenance";

export class AlertManager {
    // Dependemos de la interfaz, no de implementaciones concretas
    constructor(private notificationService: INotificationService) {}

    public notifyMaintenanceScheduled(maintenance: Maintenance, contacto: string): void {
        const message = `Mantenimiento programado: ${maintenance.getInfo()}`;
        this.notificationService.send(contacto, message);
    }

    public notifyMaintenanceCompleted(maintenance: Maintenance, contacto: string): void {
        const message = `Mantenimiento completado: ${maintenance.getInfo()}`;
        this.notificationService.send(contacto, message);
    }

    public notifyUrgentMaintenance(machineId: string, problem: string, contacto: string): void {
        const message = `URGENTE: Máquina ${machineId} requiere atención - ${problem}`;
        this.notificationService.send(contacto, message);
    }

    // Podemos cambiar el servicio de notificación en tiempo de ejecución
    public changeNotificationService(newService: INotificationService): void {
        this.notificationService = newService;
        console.log(`\n🔄 Servicio de notificación cambiado a: ${newService.getServiceName()}`);
    }
}
