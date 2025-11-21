/**
 * PRINCIPIO O - Open/Closed
 * PRINCIPIO L - Liskov Substitution
 *
 * Implementación concreta de mantenimiento correctivo
 * Puede usarse donde se espera Maintenance sin romper el comportamiento
 */
import { Maintenance, MaintenanceType } from "./Maintenance";
export declare enum Severity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}
export declare class CorrectiveMaintenance extends Maintenance {
    private problem;
    private severity;
    private partsNeeded;
    constructor(machineId: string, problem: string, severity: Severity, scheduledDate: Date, partsNeeded?: string[]);
    getType(): MaintenanceType;
    execute(): void;
    getEstimatedDuration(): number;
    getSeverity(): Severity;
}
//# sourceMappingURL=CorrectiveMaintenance.d.ts.map