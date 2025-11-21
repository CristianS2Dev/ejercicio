"use strict";
/**
 * PRINCIPIO D - Dependency Inversion
 *
 * Implementación concreta de notificación por email
 * Implementa la interfaz INotificationService
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailNotification = void 0;
class EmailNotification {
    constructor(smtpServer = "smtp.empresa.com") {
        this.smtpServer = smtpServer;
    }
    send(to, message) {
        console.log(`\n Enviando Email:`);
        console.log(`   Servidor: ${this.smtpServer}`);
        console.log(`   Para: ${to}`);
        console.log(`   Mensaje: ${message}`);
        console.log(`   Email enviado exitosamente`);
    }
    getServiceName() {
        return "Email Notification Service";
    }
}
exports.EmailNotification = EmailNotification;
//# sourceMappingURL=EmailNotification.js.map