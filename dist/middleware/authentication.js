import { GraphQLError } from 'graphql';
import { JWT } from '../helper/Jwt';
export default function (context) {
    const authHeader = context.request.headers.Authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token) {
            try {
                const user = JWT.verifyToken(token);
                return user;
            }
            catch (err) {
                throw new GraphQLError("Invalid or expired token", {
                    extensions: {
                        code: 'UNAUTHENTICATED',
                    },
                });
            }
        }
        throw new Error("Authorization token must be Bearer {Token}");
    }
    throw new Error("Authorization header must be specified");
}
