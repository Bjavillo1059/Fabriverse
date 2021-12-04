const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    role: String!
    reqeustCount: Int!
    savedRequests: [Request]
  }

  type Auth {
    token: ID
    user: User
  }

  type Request {
    requestId: String
    description: String
    title: String
    price: Float
    location: String
  }

  input UserRequest {
    requestId: String!
    description: String!
    title: String!
    price: Float!
    location: String!
  }

  type Query {
    me: User
  }

type Mutation {
    addUser(name: String!, email: String!, password: String!, role: String!): Auth
    login(email: String!, password: String!): Auth

    saveRequest(input: UserRequest): User
    removeRequest(requestId: String!): User
    }
`;

module.exports = typeDefs;