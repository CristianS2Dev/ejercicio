import { User } from "./User";
export declare class Admin extends User {
    private permissions;
    private department;
    constructor(name: string, email: string, department: string);
    getRole(): string;
    manageUsers(): void;
    showPermissions(): void;
    displayInfo(): void;
}
//# sourceMappingURL=Admin.d.ts.map