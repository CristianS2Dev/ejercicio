"use strict";
/**
 * PRINCIPIO O - Open/Closed
 * PRINCIPIO L - Liskov Substitution
 *
 * Implementación concreta de mantenimiento correctivo
 * Puede usarse donde se espera Maintenance sin romper el comportamiento
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorrectiveMaintenance = exports.Severity = void 0;
const Maintenance_1 = require("./Maintenance");
var Severity;
(function (Severity) {
    Severity["LOW"] = "LOW";
    Severity["MEDIUM"] = "MEDIUM";
    Severity["HIGH"] = "HIGH";
    Severity["CRITICAL"] = "CRITICAL";
})(Severity || (exports.Severity = Severity = {}));
class CorrectiveMaintenance extends Maintenance_1.Maintenance {
    constructor(machineId, problem, severity, scheduledDate, partsNeeded = []) {
        super(machineId, `Reparación: ${problem}`, scheduledDate);
        this.problem = problem;
        this.severity = severity;
        this.partsNeeded = partsNeeded;
    }
    getType() {
        return Maintenance_1.MaintenanceType.CORRECTIVE;
    }
    execute() {
        console.log(`\nEjecutando Mantenimiento Correctivo: ${this.problem}`);
        console.log(`   Máquina: ${this.machineId}`);
        console.log(`   Severidad: ${this.severity}`);
        this.setStatus(Maintenance_1.MaintenanceStatus.IN_PROGRESS);
        if (this.partsNeeded.length > 0) {
            console.log(`   Piezas requeridas:`);
            this.partsNeeded.forEach(part => {
                console.log(`   - ${part}`);
            });
        }
        console.log(`   Diagnosticando problema...`);
        console.log(`   Reparando...`);
        console.log(`   Probando funcionalidad...`);
        this.setStatus(Maintenance_1.MaintenanceStatus.COMPLETED);
        console.log(`  Reparación completada`);
    }
    getEstimatedDuration() {
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
    getSeverity() {
        return this.severity;
    }
}
exports.CorrectiveMaintenance = CorrectiveMaintenance;
//# sourceMappingURL=CorrectiveMaintenance.js.map