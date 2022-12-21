import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';
const scryptAsyn = promisify(scrypt);
export class Password {
    static async toHash(password) {
        const salt = randomBytes(8).toString('hex');
        const buff = (await scryptAsyn(password, salt, 64));
        return `${buff.toString('hex')}.${salt}`;
    }
    static async compare(storeedPassword, suppliedPassword) {
        const [hashPassword, salt] = storeedPassword.split('.');
        const buff = (await scryptAsyn(suppliedPassword, salt, 64));
        return hashPassword === buff.toString('hex');
    }
}
