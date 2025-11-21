/**
 * PRINCIPIO D - Dependency Inversion
 * 
 * Implementación concreta de notificación por email
 * Implementa la interfaz INotificationService
 */

import { INotificationService } from "../interfaces/INotificationService";

export class EmailNotification implements INotificationService {
    private smtpServer: string;

    constructor(smtpServer: string = "smtp.empresa.com") {
        this.smtpServer = smtpServer;
    }

    send(to: string, message: string): void {
        console.log(`\n📧 Enviando Email:`);
        console.log(`   Servidor: ${this.smtpServer}`);
        console.log(`   Para: ${to}`);
        console.log(`   Mensaje: ${message}`);
        console.log(`   ✅ Email enviado exitosamente`);
    }

    getServiceName(): string {
        return "Email Notification Service";
    }
}
