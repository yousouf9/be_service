export declare class Password {
    static toHash(password: string): Promise<string>;
    static compare(storeedPassword: string, suppliedPassword: string): Promise<boolean>;
}
