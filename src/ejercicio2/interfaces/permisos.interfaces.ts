export interface IPermissions {
    canEdit: boolean;
    canDelete: boolean;
    canCreate: boolean;
    canView: boolean;
}

// Interfaz para información de compras

export interface IPurchaseInfo {
    totalPurchases: number;
    totalSpent: number;
}