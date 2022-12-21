import { promisify } from 'util';
import jwt from 'jsonwebtoken';
const signAsync = promisify(jwt.sign);
const secret = process.env.JWT_KEY || "NOT_SAFE";
export class JWT {
    static async getToken(data) {
        const token = (await signAsync(data, secret));
        return token;
    }
    static async verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, function (err, decoded) {
                if (err)
                    reject(err);
                resolve(decoded);
            });
        });
    }
}
