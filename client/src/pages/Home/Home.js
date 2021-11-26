import React from "react";
import { Jumbotron, Container, CardColumns, Card, Button, } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_REQUESTS } from "../../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(GET_REQUESTS, {
    fetchPolicy: "no-cache",
  });

  const requestlist = data?.requests || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Fabriverse!</h1>
      </div>
    </div>
  );
};

export default Home;
