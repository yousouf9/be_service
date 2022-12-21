import { resolvers } from './users';
export const resolver = {
    Query: {
        ...resolvers.Query
    },
    Mutation: {
        ...resolvers.Mutation
    }
};
