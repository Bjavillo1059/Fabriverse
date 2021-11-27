import React from "react";
import { Jumbotron, Container, CardColumns, Card, Button, } from "react-bootstrap";

import { useQuery, useMutation } from "@apollo/client";

import Auth from "../../../src/utils/auth";
import { GET_ME } from "../../utils/queries";
import { DELETE_REQUEST } from "../../utils/mutations";
import { removeRequestId } from "../../utils/localStorage";

const SaveRequest = () => {
    // this variable is used to store the user data from the local storage
  const { loading, data } = useQuery(GET_ME);

  const [removeRequest, { error }] = useMutation(DELETE_REQUEST);

  const userData = data?.me || data.user || {};

  const handleDeleteRequest = async (requestId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if(!token) {
      return false;
    }

    try {
      await removeRequest({
        variables: {
          requestId          
        },
      });
      if(error) {
        throw new Error('something went wrong!');
      }
      removeRequestId(requestId);
    } catch (err) {
      console.log(err);
    }
  }

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
    <Jumbotron fluid className='text-light bg-dark'>
    <Container>
          <h1>Viewing saved requests!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedRequests.length
            ? `Viewing ${userData.savedRequests.length} saved ${userData.savedRequests.length === 1 ? 'request' : 'requests'}:`
            : 'You have no saved requests!'}
        </h2>
        <CardColumns>
          {userData.savedRequests.map((request) => {
            return (
              <Card key={request.requestId} border='dark'>
                {request.description}
                <Card.Body>
                  <Card.Title>{request.title}</Card.Title>                  
                  <Card.Text>{request.price}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteRequest(request.requestId)}>
                    Delete this request!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  )
}

export default SaveRequest;