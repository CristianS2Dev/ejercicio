/**
 * PRINCIPIO D - Dependency Inversion
 *
 * Interfaz abstracta para servicios de notificación
 * Las clases de alto nivel dependerán de esta abstracción, no de implementaciones concretas
 */
export interface INotificationService {
    send(to: string, message: string): void;
    getServiceName(): string;
}
//# sourceMappingURL=INotificationService.d.ts.map