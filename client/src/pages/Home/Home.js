import React,{useEffect} from "react";
import { useMutation, useQuery } from "@apollo/client";
import "../../App.css";

import Hero from "../../components/Hero/Hero";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import{
  CREATE_NEW_POST,
  DELETE_POST,
  CREATE_NEW_RESPONSE,
  DELETE_RESPONSE,
} from "../../utils/mutations";

import{
  ALL_USERS,
  ONE_USER_BY_NAME,
  ONE_USER_BY_ID,
  ALL_POSTS,
  ONE_POST_BY_TITLE,
  ONE_POST_BY_ID,
  ALL_RESPONSES,
  ONE_RESPONSE
} from "../../utils/queries";
  
  
  function Home(){
    
    //The Following portion of this code isn't actually intended to be used for this home page, It is a setup that can be used as a reference
    //on how to perform our established queries and mutators through out our component and page files, this portion should be removed before deployment
    //or at any point during development if it is no longer needed. Most of these pieces are commented out to prevent them from being called every time the page is rendered/mounted
    //If you wish to test any of these simply remove the bulk comment markers and uncomment the component you wish to test, you can see the results through the network tab in the webdev tools
    //Or through our localhost 3001 graphql path. 

    //Unlike mutators which can be called at any point after they are established queries call as they are used so they don't need any previous setup besides being imported 
    //but we can still control how often they are called by placing them inside something like this useEffect

    // useQuery(ALL_USERS);
    // useQuery(ONE_USER_BY_NAME,{variables: {username:"Amiko"}});
    // useQuery(ONE_USER_BY_ID, {variables: {_id: "61aeacb970c2dd1778396b2c"}});
    // useQuery(ALL_POSTS);
    // useQuery(ONE_POST_BY_TITLE, {variables:{title:"request for wood panels" }});
    // useQuery(ONE_POST_BY_ID, {variables: {_id: "61aeacb970c2dd1778396b32" }});
    // useQuery(ALL_RESPONSES);
    // useQuery(ONE_RESPONSE, {variables: {_id: "61aeacb970c2dd1778396b4b"}});

    //Here our mutators are established, each one is deconstructed into a function using the square brackets, we can then call that function at any point of our component
    //function which in this case is Home()
   
    const [createNewPost] = useMutation(CREATE_NEW_POST); 
    const[deletePost] = useMutation(DELETE_POST);
    const[createNewResponse] = useMutation(CREATE_NEW_RESPONSE);
    const[deleteResponse] = useMutation(DELETE_RESPONSE);
    
    //Here all the actuall calls are wrapped in a useEffect method that only executes once when the page is mounted, if the call to a mutator or query is not limited by this or a similar
    //setup it will call everytime the component updates which could lead to errors
  
    /* <= Remove this to test
    useEffect( () => {
  
    //Here we have the actual calls to our mutator functions which after setup work very similarly to our quieries

    //const post =  createNewPost({variables: {input: {postAuthor: "Amiko", postType: "offer", description: "This is a trial post to test mutators", title: "Trial Post"}}});
    //const deletedPost = deletePost({variables: {_id: "61aff7a539128c3b5c239c8f"}});
    // const response = createNewResponse({variables: {input:{responderName: "Amiko", postTitle: "carpenter for hire", content: "this is a trial response for react"}}});
    // const deletResponse = deleteResponse({variables: {_id: "61affc70f231d147c4e00d5e"}});
    }, []);
   Remove this to test => */
    
    
  return (
    <>
      <Hero />            
    </>
  );
}

export default Home;
/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Submission = (props) => {
    const [state, setState] = useState({
        Name: ''
    })

    const changeHandler = e => {
        this.setState({ Name: e.target.value });
    }

    const onCreateName = () => {

    }
    return (
        <div>
            <h2> Make Request Page </h2>
            <form>
                    <label> Full Name : </label> <input type="text" name="Name"
                        value={state.Name} onChange={changeHandler}></input>
                    <label> Requested Service : </label> <input type="text" name="RequestedService"
                        value={state.Name} onChange={changeHandler}></input>
                    <button type="button" name="Submit" > Submit </button>
            </form>
        </div>
    )
}
export default Submission;
*/