/**
 * PRINCIPIO D - Dependency Inversion
 * 
 * Implementación concreta de notificación por SMS
 * Implementa la interfaz INotificationService
 */

import { INotificationService } from "../interfaces/INotificationService";

export class SMSNotification implements INotificationService {
    private apiKey: string;

    constructor(apiKey: string = "SMS-API-KEY-12345") {
        this.apiKey = apiKey;
    }

    send(to: string, message: string): void {
        console.log(`\n📱 Enviando SMS:`);
        console.log(`   API Key: ${this.apiKey}`);
        console.log(`   Para: ${to}`);
        console.log(`   Mensaje: ${message}`);
        console.log(`   SMS enviado exitosamente`);
    }

    getServiceName(): string {
        return "SMS Notification Service";
    }
}
