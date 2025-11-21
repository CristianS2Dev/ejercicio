// PRINCIPIO I - Interface Segregation


export interface ICleanable {
    clean(): void;
    getCleaningInstructions(): string;
}
