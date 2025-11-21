
//  PRINCIPIO D - Dependency Inversion
 

export interface INotificationService {
    send(to: string, message: string): void;
    getServiceName(): string;
}
