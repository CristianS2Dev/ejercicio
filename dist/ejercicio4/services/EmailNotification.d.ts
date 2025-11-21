/**
 * PRINCIPIO D - Dependency Inversion
 *
 * Implementación concreta de notificación por email
 * Implementa la interfaz INotificationService
 */
import { INotificationService } from "../interfaces/INotificationService";
export declare class EmailNotification implements INotificationService {
    private smtpServer;
    constructor(smtpServer?: string);
    send(to: string, message: string): void;
    getServiceName(): string;
}
//# sourceMappingURL=EmailNotification.d.ts.map