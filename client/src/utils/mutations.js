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
        username
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

export const DELETE_REQUEST = gql`
  mutation deleteRequest($requestId: String!) {
    deleteRequest(requestId: $requestId) {
      _id
      username
      savedRequests {
        requestId
      }
    }
  }
`;
