import { User } from "./User";
import { IPurchaseInfo } from "./interfaces/permisos.interfaces";

export class Client extends User {
    private purchaseInfo: IPurchaseInfo;

    private isVIP: boolean;

    constructor(name: string, email: string) {
        super(name, email);
        this.purchaseInfo = {
            totalPurchases: 0,
            totalSpent: 0
        };

        this.isVIP = false;
    }

    // Sobrescribir método getRole
    getRole(): string {
        return this.isVIP ? "Cliente VIP" : "Cliente";
    }

    // Método específico de Client
    makePurchase(amount: number): void {
        this.purchaseInfo.totalPurchases++;
        this.purchaseInfo.totalSpent += amount;
       
        
        // Actualizar estado VIP si gasta más de $1000
        if (this.purchaseInfo.totalSpent >= 1000) {
            this.isVIP = true;
        }

        console.log(`   💰 ${this.name} realizó una compra de $${amount}`);
        console.log(`   Puntos ganados: ${Math.floor(amount / 10)}`);
    }

    // Método para obtener descuento según sea VIP
    getDiscount(): number {
        return this.isVIP ? 20 : 5;
    }

    // Mostrar historial de compras
    showPurchaseHistory(): void {
        console.log(`   Compras totales: ${this.purchaseInfo.totalPurchases}`);

        console.log(`   Total gastado: $${this.purchaseInfo.totalSpent}`);

        console.log(`   Descuento actual: ${this.getDiscount()}%`);
    }

    // Sobrescribir displayInfo
    displayInfo(): void {
        super.displayInfo();
        this.showPurchaseHistory();
    }
}