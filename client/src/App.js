import React, { useState, useEffect } from "react";
import "./App.css";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
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

var randomColor = require("randomcolor");

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



  
function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  const newitem = () => {
    if (item.trim() !== "") {
      const newitem = {
        id: uuidv4(),
        item: item,
        color: randomColor({
          luminosity: "light",
        }),
        defaultPos: { x: 100, y: 0 },
      };
      setItems((items) => [...items, newitem]);
      setItem("");
    } else {
      alert("Enter a item");
      setItem("");
    }
  };

  const keyPress = (event) => {
    var code = event.keyCode || event.which;
    if (code === 13) {
      newitem();
    }
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const updatePos = (data, index) => {
    let newArr = [...items];
    newArr[index].defaultPos = { x: data.x, y: data.y };
    setItems(newArr);
  };

  const deleteNote = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
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
            <Route render={() => <h1 className="display-2">OOPs! Wrong page!</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );

 return (
  <div className="App">
    <div id="new-item">
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter something..."
        onKeyPress={(e) => keyPress(e)}
      />
      <button onClick={newitem}>ENTER</button>
    </div>
    {items.map((item, index) => {
      return (
        <Draggable
          key={item.id}
          defaultPosition={item.defaultPos}
          onStop={(e, data) => {
            updatePos(data, index);
          }}
        >
          <div style={{ backgroundColor: item.color }} className="box">
            {`${item.item}`}
            <button id="delete" onClick={(e) => deleteNote(item.id)}>
              X
            </button>
          </div>
        </Draggable>
       );
    })}
  </div>
);
  };
export default App;