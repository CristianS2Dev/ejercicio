/**
 * PRINCIPIO I - Interface Segregation
 * 
 * Interfaz pequeña y específica para máquinas que pueden limpiarse
 * Solo las máquinas que necesiten este comportamiento lo implementarán
 */

export interface ICleanable {
    clean(): void;
    getCleaningInstructions(): string;
}
