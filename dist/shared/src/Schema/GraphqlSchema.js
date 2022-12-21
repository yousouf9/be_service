const typeDefs = `#graphql
  type User {
    username: String
    email: String
    password: String
    id: String
    token: String
  }
  input RegisterInput {
    username: String
    email: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type Mutation {
    loginUser(loginInput: LoginInput): User
    registerUser(registerInput: RegisterInput): User
  }

  type Query {
    user(id: ID!) : User
  }
`;
export { typeDefs };
