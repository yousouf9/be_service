declare const typeDefs = "#graphql\n  type User {\n    username: String\n    email: String\n    password: String\n    id: String\n    token: String\n  }\n  input RegisterInput {\n    username: String\n    email: String\n    password: String\n  }\n\n  input LoginInput {\n    email: String\n    password: String\n  }\n\n  type Mutation {\n    loginUser(loginInput: LoginInput): User\n    registerUser(registerInput: RegisterInput): User\n  }\n\n  type Query {\n    user(id: ID!) : User\n  }\n";
export { typeDefs };