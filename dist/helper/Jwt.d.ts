export interface JWT_Data {
    id: string;
    email: string;
    username: string;
}
export declare class JWT {
    static getToken(data: JWT_Data): Promise<string>;
    static verifyToken(token: string): Promise<JWT_Data>;
}
