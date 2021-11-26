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

export const GET_REQUESTS = gql`
  query requests($_id: String!) {
    requests(_id: $_id) {
      _id
      description
      title
      price
      location
    }
  }
`;
