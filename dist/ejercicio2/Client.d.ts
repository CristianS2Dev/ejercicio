import { User } from "./User";
export declare class Client extends User {
    private purchaseInfo;
    private isVIP;
    constructor(name: string, email: string);
    getRole(): string;
    makePurchase(amount: number): void;
    getDiscount(): number;
    showPurchaseHistory(): void;
    displayInfo(): void;
}
//# sourceMappingURL=Client.d.ts.map