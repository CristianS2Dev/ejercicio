"use strict";
/**
 * PRINCIPIO S - Single Responsibility
 *
 * Esta clase tiene UNA sola responsabilidad: gestionar la persistencia de máquinas
 * No maneja lógica de negocio, logging, ni notificaciones
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MachineRepository = void 0;
class MachineRepository {
    constructor() {
        this.machines = new Map();
    }
    // CREATE
    save(machine) {
        this.machines.set(machine.getId(), machine);
    }
    // READ
    findById(id) {
        return this.machines.get(id);
    }
    findAll() {
        return Array.from(this.machines.values());
    }
    // UPDATE
    update(machine) {
        if (this.machines.has(machine.getId())) {
            this.machines.set(machine.getId(), machine);
            return true;
        }
        return false;
    }
    // DELETE
    delete(id) {
        return this.machines.delete(id);
    }
    // UTILIDADES
    exists(id) {
        return this.machines.has(id);
    }
    count() {
        return this.machines.size;
    }
}
exports.MachineRepository = MachineRepository;
//# sourceMappingURL=MachineRepository.js.map