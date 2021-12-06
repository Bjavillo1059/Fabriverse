const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    posts: [Post]
  }

  type Auth {
    token: ID
    user: User
  }

  type Post {
    userId: User
    postAuthor: String
    postType: String
    description: String
    title: String
    price: Float
    location: String
    responses: [Response]
  }

  type Response
  {
    responderName: String
  }

  input UserRequest {
    requestId: String!
    description: String!
    title: String!
    price: Float!
    location: String!
  }

  type Query {
    users: [User]!
    user(username: String!): User
    allPosts: [Post]
    allRequests: [Post]
    allOffers: [Post]
    post(title: String!): Post
    me: User
  }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveRequest(input: UserRequest): User
    removeRequest(requestId: String!): User
    }
`;

module.exports = typeDefs;