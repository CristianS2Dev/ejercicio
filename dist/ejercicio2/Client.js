"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const User_1 = require("./User");
class Client extends User_1.User {
    constructor(name, email) {
        super(name, email);
        this.purchaseInfo = {
            totalPurchases: 0,
            totalSpent: 0
        };
        this.isVIP = false;
    }
    getRole() {
        return this.isVIP ? "Cliente VIP" : "Cliente";
    }
    makePurchase(amount) {
        this.purchaseInfo.totalPurchases++;
        this.purchaseInfo.totalSpent += amount;
        if (this.purchaseInfo.totalSpent >= 1000) {
            this.isVIP = true;
        }
        console.log(`   💰 ${this.name} realizó una compra de $${amount}`);
        console.log(`   Puntos ganados: ${Math.floor(amount / 10)}`);
    }
    getDiscount() {
        return this.isVIP ? 20 : 5;
    }
    showPurchaseHistory() {
        console.log(`   Compras totales: ${this.purchaseInfo.totalPurchases}`);
        console.log(`   Total gastado: $${this.purchaseInfo.totalSpent}`);
        console.log(`   Descuento actual: ${this.getDiscount()}%`);
    }
    displayInfo() {
        super.displayInfo();
        this.showPurchaseHistory();
    }
}
exports.Client = Client;
//# sourceMappingURL=Client.js.map