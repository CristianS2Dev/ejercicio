/**
 * PRINCIPIO I - Interface Segregation
 *
 * Diferentes tipos de máquinas implementan solo las interfaces que necesitan
 */
import { IRunnable } from "../interfaces/IRunnable";
import { ICleanable } from "../interfaces/ICleanable";
export declare enum MachineStatus {
    OPERATIONAL = "OPERATIONAL",
    MAINTENANCE = "MAINTENANCE",
    BROKEN = "BROKEN",
    OFF = "OFF"
}
export declare class Machine {
    protected id: string;
    protected name: string;
    protected status: MachineStatus;
    constructor(id: string, name: string);
    getId(): string;
    getName(): string;
    getStatus(): MachineStatus;
    setStatus(status: MachineStatus): void;
    getInfo(): string;
}
/**
 * Máquina que puede ejecutarse y limpiarse
 */
export declare class ProductionMachine extends Machine implements IRunnable, ICleanable {
    private isRunning;
    run(): void;
    stop(): void;
    clean(): void;
    getCleaningInstructions(): string;
}
/**
 * Máquina que solo puede ejecutarse
 */
export declare class MonitoringMachine extends Machine implements IRunnable {
    isRunning: boolean;
    run(): void;
    stop(): void;
}
//# sourceMappingURL=Machine.d.ts.map