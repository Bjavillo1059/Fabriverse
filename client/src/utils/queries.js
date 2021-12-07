import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      savedRequests {
        _id
        title
        description
        price
        location
      }
    }
  }
`;

export const ALL_USERS = gql`
  query allUsers {
    _id
    username
    email
  }
`;

export const ONE_USER_BY_NAME = gql`
  query oneUserByName($username: String) {
    oneUserByName(username: $String) {
      _id
      username
      email
    }
  }
`;

export const ONE_USER_BY_ID = gql`
  query oneUserById($_id: ID) {
    oneUserById(_id: $ID) {
      _id
      username
      email
    }
  }
`;

export const ALL_POSTS = gql`
  query allPosts {
    _id
    postAuthor
    postType
    description
    title
    price
    location
  }
`;

export const ONE_POST_BY_TITLE = gql`
  query onePostByTitle($title: String) {
    onePostByTitle(title: $String) {
      _id
      postAuthor
      postType
      description
      title
      price
      location
    }
  }
`;

export const ONE_POST_BY_ID = gql`
  query onePostById($_id: ID) {
    onePostById(_id: $ID) {
      _id
      postAuthor
      postType
      description
      title
      price
      location
    }
  }
`;

export const ALL_RESPONSES = gql`
  query allResponses {
    _id
    responderName
    postTitle
  }
`;

export const ONE_RESPONSE = gql`
  query oneResponse($_id: ID) {
    oneResponse(_id: $ID) {
      _id
      responderName
      postTitle
    }
  }
`;