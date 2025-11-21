/**
 * PRINCIPIO I - Interface Segregation
 *
 * Interfaz pequeña y específica para máquinas que pueden ejecutarse
 * Solo las máquinas que necesiten este comportamiento lo implementarán
 */
export interface IRunnable {
    run(): void;
    stop(): void;
}
//# sourceMappingURL=IRunnable.d.ts.map