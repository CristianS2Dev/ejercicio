/**
 * PRINCIPIO O - Open/Closed
 * PRINCIPIO L - Liskov Substitution
 * 
 * Implementación concreta de mantenimiento preventivo
 * Puede usarse donde se espera Maintenance sin romper el comportamiento
 */

import { Maintenance, MaintenanceType, MaintenanceStatus } from "./Maintenance";

export class PreventiveMaintenance extends Maintenance {
    private checklist: string[];
    private frequency: string; // "mensual", "trimestral", etc.

    constructor(
        machineId: string,
        description: string,
        scheduledDate: Date,
        frequency: string,
        checklist: string[]
    ) {
        super(machineId, description, scheduledDate);
        this.frequency = frequency;
        this.checklist = checklist;
    }

    getType(): MaintenanceType {
        return MaintenanceType.PREVENTIVE;
    }

    execute(): void {
        console.log(`\n🔧 Ejecutando Mantenimiento Preventivo: ${this.description}`);
        console.log(`   Máquina: ${this.machineId}`);
        console.log(`   Frecuencia: ${this.frequency}`);
        console.log(`   Checklist:`);
        
        this.setStatus(MaintenanceStatus.IN_PROGRESS);
        
        this.checklist.forEach((item, index) => {
            console.log(`   ${index + 1}. ✅ ${item}`);
        });
        
        this.setStatus(MaintenanceStatus.COMPLETED);
        console.log(`   ✅ Mantenimiento preventivo completado`);
    }

    getEstimatedDuration(): number {
        // Estimar 0.5 horas por item del checklist
        return this.checklist.length * 0.5;
    }

    public getChecklist(): string[] {
        return [...this.checklist];
    }
}
