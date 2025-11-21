"use strict";
/**
 * PRINCIPIO I - Interface Segregation
 *
 * Diferentes tipos de máquinas implementan solo las interfaces que necesitan
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitoringMachine = exports.ProductionMachine = exports.Machine = exports.MachineStatus = void 0;
var MachineStatus;
(function (MachineStatus) {
    MachineStatus["OPERATIONAL"] = "OPERATIONAL";
    MachineStatus["MAINTENANCE"] = "MAINTENANCE";
    MachineStatus["BROKEN"] = "BROKEN";
    MachineStatus["OFF"] = "OFF";
})(MachineStatus || (exports.MachineStatus = MachineStatus = {}));
class Machine {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = MachineStatus.OFF;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getInfo() {
        return `${this.name} (${this.id}) - Estado: ${this.status}`;
    }
}
exports.Machine = Machine;
/**
 * Máquina que puede ejecutarse y limpiarse
 */
class ProductionMachine extends Machine {
    constructor() {
        super(...arguments);
        this.isRunning = false;
    }
    run() {
        if (this.status === MachineStatus.OPERATIONAL) {
            this.isRunning = true;
            console.log(`▶️  ${this.name} está en funcionamiento`);
        }
        else {
            console.log(`❌ ${this.name} no puede ejecutarse. Estado: ${this.status}`);
        }
    }
    stop() {
        this.isRunning = false;
        console.log(`⏹️  ${this.name} detenida`);
    }
    clean() {
        if (!this.isRunning) {
            console.log(`🧹 Limpiando ${this.name}...`);
            console.log(`   ${this.getCleaningInstructions()}`);
        }
        else {
            console.log(`❌ Detén la máquina antes de limpiarla`);
        }
    }
    getCleaningInstructions() {
        return "1. Apagar máquina\n   2. Limpiar superficies\n   3. Lubricar partes móviles";
    }
}
exports.ProductionMachine = ProductionMachine;
/**
 * Máquina que solo puede ejecutarse
 */
class MonitoringMachine extends Machine {
    constructor() {
        super(...arguments);
        this.isRunning = false;
    }
    run() {
        if (this.status === MachineStatus.OPERATIONAL) {
            this.isRunning = true;
            console.log(`${this.name} iniciando monitoreo`);
        }
        else {
            console.log(`${this.name} no disponible`);
        }
    }
    stop() {
        this.isRunning = false;
        console.log(`⏹️  ${this.name} monitoreo detenido`);
    }
}
exports.MonitoringMachine = MonitoringMachine;
//# sourceMappingURL=Machine.js.map