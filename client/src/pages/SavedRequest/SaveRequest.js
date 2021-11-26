import React from "react";
import { Jumbotron, Container, CardColumns, Card, Button, } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";

import Auth from "../../../src/utils/auth";
import { GET_ME } from "../../utils/queries";
import { REMOVE_REQUEST } from "../../utils/mutations";

const SaveRequest = () => {
    // this variable is used to store the user data from the local storage
  const { loading, data } = useQuery(GET_ME);

}

export default SaveRequest;