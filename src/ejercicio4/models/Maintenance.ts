/**
 * PRINCIPIO O - Open/Closed
 * 
 * Clase base abstracta para mantenimientos
 * Abierta a extensión (nuevas subclases) pero cerrada a modificación
 */

export enum MaintenanceType {
    PREVENTIVE = "PREVENTIVE",
    CORRECTIVE = "CORRECTIVE"
}

export enum MaintenanceStatus {
    PENDING = "PENDING",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export abstract class Maintenance {
    protected id: string;
    protected machineId: string;
    protected scheduledDate: Date;
    protected status: MaintenanceStatus;
    protected description: string;

    constructor(machineId: string, description: string, scheduledDate: Date) {
        this.id = this.generateId();
        this.machineId = machineId;
        this.description = description;
        this.scheduledDate = scheduledDate;
        this.status = MaintenanceStatus.PENDING;
    }

    private generateId(): string {
        return `MAINT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    // Método abstracto que cada subclase debe implementar
    abstract getType(): MaintenanceType;
    abstract execute(): void;
    abstract getEstimatedDuration(): number; // en horas

    // Métodos comunes
    public getId(): string {
        return this.id;
    }

    public getMachineId(): string {
        return this.machineId;
    }

    public getStatus(): MaintenanceStatus {
        return this.status;
    }

    public setStatus(status: MaintenanceStatus): void {
        this.status = status;
    }

    public getInfo(): string {
        return `[${this.getType()}] ${this.description} - Estado: ${this.status}`;
    }
}
