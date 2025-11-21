/**
 * PRINCIPIO O - Open/Closed
 * PRINCIPIO L - Liskov Substitution
 *
 * Implementación concreta de mantenimiento preventivo
 * Puede usarse donde se espera Maintenance sin romper el comportamiento
 */
import { Maintenance, MaintenanceType } from "./Maintenance";
export declare class PreventiveMaintenance extends Maintenance {
    private checklist;
    private frequency;
    constructor(machineId: string, description: string, scheduledDate: Date, frequency: string, checklist: string[]);
    getType(): MaintenanceType;
    execute(): void;
    getEstimatedDuration(): number;
    getChecklist(): string[];
}
//# sourceMappingURL=PreventiveMaintenance.d.ts.map