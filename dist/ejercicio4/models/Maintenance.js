"use strict";
/**
 * PRINCIPIO O - Open/Closed
 *
 * Clase base abstracta para mantenimientos
 * Abierta a extensión (nuevas subclases) pero cerrada a modificación
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maintenance = exports.MaintenanceStatus = exports.MaintenanceType = void 0;
var MaintenanceType;
(function (MaintenanceType) {
    MaintenanceType["PREVENTIVE"] = "PREVENTIVE";
    MaintenanceType["CORRECTIVE"] = "CORRECTIVE";
})(MaintenanceType || (exports.MaintenanceType = MaintenanceType = {}));
var MaintenanceStatus;
(function (MaintenanceStatus) {
    MaintenanceStatus["PENDING"] = "PENDING";
    MaintenanceStatus["IN_PROGRESS"] = "IN_PROGRESS";
    MaintenanceStatus["COMPLETED"] = "COMPLETED";
    MaintenanceStatus["CANCELLED"] = "CANCELLED";
})(MaintenanceStatus || (exports.MaintenanceStatus = MaintenanceStatus = {}));
class Maintenance {
    constructor(machineId, description, scheduledDate) {
        this.id = this.generateId();
        this.machineId = machineId;
        this.description = description;
        this.scheduledDate = scheduledDate;
        this.status = MaintenanceStatus.PENDING;
    }
    generateId() {
        return `MAINT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    // Métodos comunes
    getId() {
        return this.id;
    }
    getMachineId() {
        return this.machineId;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getInfo() {
        return `[${this.getType()}] ${this.description} - Estado: ${this.status}`;
    }
}
exports.Maintenance = Maintenance;
//# sourceMappingURL=Maintenance.js.map