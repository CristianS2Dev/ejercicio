/**
 * PRINCIPIO O - Open/Closed
 * PRINCIPIO L - Liskov Substitution
 * 
 * Implementación concreta de mantenimiento correctivo
 * Puede usarse donde se espera Maintenance sin romper el comportamiento
 */

import { Maintenance, MaintenanceType, MaintenanceStatus } from "./Maintenance";

export enum Severity {
    LOW = "LOW",
    MEDIUM = "MEDIUM",
    HIGH = "HIGH",
    CRITICAL = "CRITICAL"
}

export class CorrectiveMaintenance extends Maintenance {
    private problem: string;
    private severity: Severity;
    private partsNeeded: string[];

    constructor(
        machineId: string,
        problem: string,
        severity: Severity,
        scheduledDate: Date,
        partsNeeded: string[] = []
    ) {
        super(machineId, `Reparación: ${problem}`, scheduledDate);
        this.problem = problem;
        this.severity = severity;
        this.partsNeeded = partsNeeded;
    }

    getType(): MaintenanceType {
        return MaintenanceType.CORRECTIVE;
    }

    execute(): void {
        console.log(`\nEjecutando Mantenimiento Correctivo: ${this.problem}`);
        console.log(`   Máquina: ${this.machineId}`);
        console.log(`   Severidad: ${this.severity}`);
        
        this.setStatus(MaintenanceStatus.IN_PROGRESS);
        
        if (this.partsNeeded.length > 0) {
            console.log(`   Piezas requeridas:`);
            this.partsNeeded.forEach(part => {
                console.log(`   - ${part}`);
            });
        }
        
        console.log(`   Diagnosticando problema...`);
        console.log(`   Reparando...`);
        console.log(`   Probando funcionalidad...`);
        
        this.setStatus(MaintenanceStatus.COMPLETED);
        console.log(`  Reparación completada`);
    }

    getEstimatedDuration(): number {
        // Estimar duración según severidad
        switch (this.severity) {
            case Severity.CRITICAL:
                return 8;
            case Severity.HIGH:
                return 4;
            case Severity.MEDIUM:
                return 2;
            case Severity.LOW:
                return 1;
        }
    }

    public getSeverity(): Severity {
        return this.severity;
    }
}
