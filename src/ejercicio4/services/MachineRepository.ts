/**
 * PRINCIPIO S - Single Responsibility
 * 
 * Esta clase tiene UNA sola responsabilidad: gestionar la persistencia de máquinas
 * No maneja lógica de negocio, logging, ni notificaciones
 */

import { Machine } from "../models/Machine";

export class MachineRepository {
    private machines: Map<string, Machine>;

    constructor() {
        this.machines = new Map();
    }

    // CREATE
    public save(machine: Machine): void {
        this.machines.set(machine.getId(), machine);
    }

    // READ
    public findById(id: string): Machine | undefined {
        return this.machines.get(id);
    }

    public findAll(): Machine[] {
        return Array.from(this.machines.values());
    }

    // UPDATE
    public update(machine: Machine): boolean {
        if (this.machines.has(machine.getId())) {
            this.machines.set(machine.getId(), machine);
            return true;
        }
        return false;
    }

    // DELETE
    public delete(id: string): boolean {
        return this.machines.delete(id);
    }

    // UTILIDADES
    public exists(id: string): boolean {
        return this.machines.has(id);
    }

    public count(): number {
        return this.machines.size;
    }
}
