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
export declare class AlertManager {
    private notificationService;
    constructor(notificationService: INotificationService);
    notifyMaintenanceScheduled(maintenance: Maintenance, contacto: string): void;
    notifyMaintenanceCompleted(maintenance: Maintenance, contacto: string): void;
    notifyUrgentMaintenance(machineId: string, problem: string, contacto: string): void;
    changeNotificationService(newService: INotificationService): void;
}
//# sourceMappingURL=AlertManager.d.ts.map