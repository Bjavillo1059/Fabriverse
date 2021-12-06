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
    _id: ID
    user: User
    postAuthor: String
    postType: String
    description: String
    title: String
    price: Float
    location: String
    responses: [Response]
  }

  type Response{
    _id: ID
    user: User
    responderName: String
    post: Post
    postTitle: String
    content: String
  }

  input NewPost {
    user: ID
    postAuthor: String!
    postType: String!
    description: String!
    title: String!
    price: Float
    location: String
  }

  input NewResponse{
    user: ID
    responderName: String
    post: ID
    postTitle: String
    content: String
  }

  type Query {
    allUsers: [User]!
    oneUserByName(username: String!): User
    oneUserById(_id: ID): User
    allPosts: [Post]
    allRequestPosts: [Post]
    allOfferPosts: [Post]
    onePostByTitle(title: String!): Post
    onePostById(_id: ID): Post
    allResponses: [Response]
    oneResponse(_id: ID):Response
    me: User
  }

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createNewPost(input: NewPost): Post


    saveRequest(input: NewPost): User
    removeRequest(requestId: String!): User
    }
`;

module.exports = typeDefs;