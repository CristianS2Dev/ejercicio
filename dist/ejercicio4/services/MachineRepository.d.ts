/**
 * PRINCIPIO S - Single Responsibility
 *
 * Esta clase tiene UNA sola responsabilidad: gestionar la persistencia de máquinas
 * No maneja lógica de negocio, logging, ni notificaciones
 */
import { Machine } from "../models/Machine";
export declare class MachineRepository {
    private machines;
    constructor();
    save(machine: Machine): void;
    findById(id: string): Machine | undefined;
    findAll(): Machine[];
    update(machine: Machine): boolean;
    delete(id: string): boolean;
    exists(id: string): boolean;
    count(): number;
}
//# sourceMappingURL=MachineRepository.d.ts.map