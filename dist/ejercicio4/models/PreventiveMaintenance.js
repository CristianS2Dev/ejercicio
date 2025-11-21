"use strict";
/**
 * PRINCIPIO O - Open/Closed
 * PRINCIPIO L - Liskov Substitution
 *
 * Implementación concreta de mantenimiento preventivo
 * Puede usarse donde se espera Maintenance sin romper el comportamiento
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreventiveMaintenance = void 0;
const Maintenance_1 = require("./Maintenance");
class PreventiveMaintenance extends Maintenance_1.Maintenance {
    constructor(machineId, description, scheduledDate, frequency, checklist) {
        super(machineId, description, scheduledDate);
        this.frequency = frequency;
        this.checklist = checklist;
    }
    getType() {
        return Maintenance_1.MaintenanceType.PREVENTIVE;
    }
    execute() {
        console.log(`\n🔧 Ejecutando Mantenimiento Preventivo: ${this.description}`);
        console.log(`   Máquina: ${this.machineId}`);
        console.log(`   Frecuencia: ${this.frequency}`);
        console.log(`   Checklist:`);
        this.setStatus(Maintenance_1.MaintenanceStatus.IN_PROGRESS);
        this.checklist.forEach((item, index) => {
            console.log(`   ${index + 1}. ✅ ${item}`);
        });
        this.setStatus(Maintenance_1.MaintenanceStatus.COMPLETED);
        console.log(`   ✅ Mantenimiento preventivo completado`);
    }
    getEstimatedDuration() {
        // Estimar 0.5 horas por item del checklist
        return this.checklist.length * 0.5;
    }
    getChecklist() {
        return [...this.checklist];
    }
}
exports.PreventiveMaintenance = PreventiveMaintenance;
//# sourceMappingURL=PreventiveMaintenance.js.map