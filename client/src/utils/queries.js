import { gql } from "@apollo/client";

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      posts{
        _id
        title,
        description,
        postType
      }
    }
  }
`;

export const ALL_USERS = gql`
  query allUsers {
   allUsers{
     _id
     username
   }
  }
`;

export const ONE_USER_BY_NAME = gql`
  query oneUserByName($username: String!) {
    oneUserByName(username: $username) {
      _id
      username
      email
      posts{title postType description}
    }
  }
`;

export const ONE_USER_BY_ID = gql`
  query oneUserById($_id: ID) {
    oneUserById(_id: $_id) {
      _id
      username
      email
      posts{title postType description}
    }
  }
`;

export const ALL_POSTS = gql`
  query allPosts {
   allPosts{
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

export const ONE_POST_BY_TITLE = gql`
  query onePostByTitle($title: String!) {
    onePostByTitle(title: $title) {
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
    onePostById(_id: $_id) {
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
    allResponses{
     _id
    responderName
    postTitle
    }
  }
`;

export const ONE_RESPONSE = gql`
  query oneResponse($_id: ID) {
    oneResponse(_id: $_id) {
      _id
      responderName
      postTitle
    }
  }
`;