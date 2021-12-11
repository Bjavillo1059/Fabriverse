import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,  
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";

import Home from "../src/pages/Home/Home";
import Login from "../src/pages/Login/Login";
import Signup from "../src/pages/Signup/Signup";
import SaveRequest from "../src/pages/SavedRequest/SaveRequest";
import RequestBlog from "./components/RequestBlog/RequestBlog";
import AboutUs from "../src/pages/AboutUs/AboutUs";
import Contact from "../src/pages/Contact/Contact";
// import makerequest from "./pages/processrequest";
import Hub from "./pages/hub/hub"
import Bulletin from "./pages/temp/temp";


import React, { useState, useEffect } from "react";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



  function App(){
    return (
  
      <ApolloProvider client={client}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/request" component={RequestBlog} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />            
              <Route exact path="/saved" component={SaveRequest} />
              <Route exact path="/about" component={AboutUs} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/bulletin" component={Bulletin} />
              <Route exact path = "/hub" component = {Hub}/>
              <Route render={() => <h1 className="display-2">OOPs! Wrong page!</h1>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  }


 export default App;