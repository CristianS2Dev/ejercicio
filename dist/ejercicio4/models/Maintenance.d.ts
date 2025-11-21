/**
 * PRINCIPIO O - Open/Closed
 *
 * Clase base abstracta para mantenimientos
 * Abierta a extensión (nuevas subclases) pero cerrada a modificación
 */
export declare enum MaintenanceType {
    PREVENTIVE = "PREVENTIVE",
    CORRECTIVE = "CORRECTIVE"
}
export declare enum MaintenanceStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}
export declare abstract class Maintenance {
    protected id: string;
    protected machineId: string;
    protected scheduledDate: Date;
    protected status: MaintenanceStatus;
    protected description: string;
    constructor(machineId: string, description: string, scheduledDate: Date);
    private generateId;
    abstract getType(): MaintenanceType;
    abstract execute(): void;
    abstract getEstimatedDuration(): number;
    getId(): string;
    getMachineId(): string;
    getStatus(): MaintenanceStatus;
    setStatus(status: MaintenanceStatus): void;
    getInfo(): string;
}
//# sourceMappingURL=Maintenance.d.ts.map