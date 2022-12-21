import { User } from "../Model/user";
import { GraphQLError } from 'graphql';
import { ErrorCodes } from "../helper/error-codes";
import { JWT } from '../helper/Jwt';
import { Password } from "../shared/src/services/Password";
export const resolvers = {
    Mutation: {
        async registerUser(_, { registerInput: { username, email, password } }) {
            const olduser = await User.findOne({ email });
            if (olduser) {
                throw new GraphQLError(`User with email ${email} already exists`, {
                    extensions: {
                        code: ErrorCodes.userExist,
                    },
                });
            }
            const newuser = new User({ username, email, password });
            const token = await JWT.getToken({ username, email, id: newuser.id });
            newuser.token = token;
            const user = await newuser.save();
            return {
                id: user.id,
                username: user.username,
                email: user.email,
                token: user.token
            };
        },
        async loginUser(_, { loginInput: { email, password } }) {
            const user = await User.findOne({ email });
            if (!user) {
                throw new GraphQLError(`Invalid user or password`, {
                    extensions: {
                        code: ErrorCodes.invalidCredentials,
                    },
                });
            }
            const isValidPassword = Password.compare(user.password, password);
            if (!isValidPassword) {
                throw new GraphQLError(`Invalid user or password`, {
                    extensions: {
                        code: ErrorCodes.invalidCredentials,
                    },
                });
            }
            const token = await JWT.getToken({ username: user.username, email: user.email, id: user.id });
            user.token = token;
            return {
                id: user.id,
                username: user.username,
                email: user.email,
                token: user.token
            };
        }
    },
    Query: {
        user: (_, { ID }) => User.findById(ID)
    }
};
