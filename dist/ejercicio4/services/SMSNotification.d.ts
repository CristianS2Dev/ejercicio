/**
 * PRINCIPIO D - Dependency Inversion
 *
 * Implementación concreta de notificación por SMS
 * Implementa la interfaz INotificationService
 */
import { INotificationService } from "../interfaces/INotificationService";
export declare class SMSNotification implements INotificationService {
    private apiKey;
    constructor(apiKey?: string);
    send(to: string, message: string): void;
    getServiceName(): string;
}
//# sourceMappingURL=SMSNotification.d.ts.map