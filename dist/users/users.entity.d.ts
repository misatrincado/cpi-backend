export declare class Users {
    id: number;
    email: string;
    password: string;
    usertype_id: number;
    created: string;
    hashPassword(): Promise<void>;
    beforeInsertActions(): void;
}
