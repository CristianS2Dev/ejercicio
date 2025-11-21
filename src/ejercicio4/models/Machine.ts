/**
 * PRINCIPIO I - Interface Segregation
 * 
 * Diferentes tipos de máquinas implementan solo las interfaces que necesitan
 */

import { IRunnable } from "../interfaces/IRunnable";
import { ICleanable } from "../interfaces/ICleanable";

export enum MachineStatus {
    OPERATIONAL = "OPERATIONAL",
    MAINTENANCE = "MAINTENANCE",
    BROKEN = "BROKEN",
    OFF = "OFF"
}

export class Machine {
    protected id: string;
    protected name: string;
    protected status: MachineStatus;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.status = MachineStatus.OFF;
    }

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getStatus(): MachineStatus {
        return this.status;
    }

    public setStatus(status: MachineStatus): void {
        this.status = status;
    }

    public getInfo(): string {
        return `${this.name} (${this.id}) - Estado: ${this.status}`;
    }
}

/**
 * Máquina que puede ejecutarse y limpiarse
 */
export class ProductionMachine extends Machine implements IRunnable, ICleanable {
    private isRunning: boolean = false;

    run(): void {
        if (this.status === MachineStatus.OPERATIONAL) {
            this.isRunning = true;
            console.log(`▶️  ${this.name} está en funcionamiento`);
        } else {
            console.log(`❌ ${this.name} no puede ejecutarse. Estado: ${this.status}`);
        }
    }

    stop(): void {
        this.isRunning = false;
        console.log(`⏹️  ${this.name} detenida`);
    }

    clean(): void {
        if (!this.isRunning) {
            console.log(`🧹 Limpiando ${this.name}...`);
            console.log(`   ${this.getCleaningInstructions()}`);
        } else {
            console.log(`❌ Detén la máquina antes de limpiarla`);
        }
    }

    getCleaningInstructions(): string {
        return "1. Apagar máquina\n   2. Limpiar superficies\n   3. Lubricar partes móviles";
    }
}

/**
 * Máquina que solo puede ejecutarse
 */
export class MonitoringMachine extends Machine implements IRunnable {
    
    public isRunning: boolean = false;

    run(): void {
        if (this.status === MachineStatus.OPERATIONAL) {
            this.isRunning = true;
            console.log(`${this.name} iniciando monitoreo`);
        } else {
            console.log(`${this.name} no disponible`);
        }
    }

    stop(): void {
        this.isRunning = false;
        console.log(`⏹️  ${this.name} monitoreo detenido`);
    }
}
