"use strict";
/**
 * PRINCIPIO D - Dependency Inversion
 *
 * Implementación concreta de notificación por SMS
 * Implementa la interfaz INotificationService
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSNotification = void 0;
class SMSNotification {
    constructor(apiKey = "SMS-API-KEY-12345") {
        this.apiKey = apiKey;
    }
    send(to, message) {
        console.log(`\n📱 Enviando SMS:`);
        console.log(`   API Key: ${this.apiKey}`);
        console.log(`   Para: ${to}`);
        console.log(`   Mensaje: ${message}`);
        console.log(`   SMS enviado exitosamente`);
    }
    getServiceName() {
        return "SMS Notification Service";
    }
}
exports.SMSNotification = SMSNotification;
//# sourceMappingURL=SMSNotification.js.map