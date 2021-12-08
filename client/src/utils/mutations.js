import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
     token
      user {
        _id
      }
    }
  }
`;

export const SAVE_REQUEST = gql`
  mutation saveRequest($input: UserRequest!) {
    saveRequest(input: $input) {
      _id
      username
      savedRequests {
        requestId
      }
    }
  }
`;

export const REMOVE_REQUEST = gql`
  mutation removeRequest($requestId: String!) {
    removeRequest(requestId: $requestId) {
      _id
      username
      savedRequests {
        requestId
      }
    }
  }
`;

export const CREATE_NEW_POST = gql`
  mutation createNewPost($input: NewPost) {
    createNewPost(input: $input) {
    title
     _id
    postAuthor
    postType
    description
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($_id: ID) {
    deletePost(_id: $_id) {
    title
     _id
    }
  }
`;

export const CREATE_NEW_RESPONSE = gql`
  mutation createNewResponse($input: NewResponse) {
    createNewResponse(input: $input) {
     _id
    responderName
    postTitle
    content
    }
  }
`;

export const DELETE_RESPONSE = gql`
  mutation deleteResponse($_id: ID) {
    deleteResponse(_id: $_id) {
    _id
    content
    }
  }
`;