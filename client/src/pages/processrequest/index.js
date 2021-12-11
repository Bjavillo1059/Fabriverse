import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import img from "../../../src/images/request-img.jpg";
<<<<<<< HEAD
=======

>>>>>>> bd9edd995ffe444e4e26ad1559c909f909c4479c
import Bulletin from "../Bulletin/Bulletin"

import{ CREATE_NEW_POST} from "../../utils/mutations";
import{GET_USER_BY_ID} from "../../utils/queries";
import Draggable from "react-draggable";
import { v4 as uuidv4 } from "uuid";
var randomColor = require("randomcolor");
<<<<<<< HEAD
=======

>>>>>>> bd9edd995ffe444e4e26ad1559c909f909c4479c

const SubmissionContainer = styled.div`
  color: var(--color5);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.7);

  :root {
    --color1: #505857;
    --color2: #567a6f;
    --color3: #669d7b;
    --color4: #87be7d;
    --color5: #b9dd78;
    --color6: #f9f871;
    --color7: rgb(0, 0, 0);
    --font-family-2: Arial;
    --font-family-3: sans-serif;
  }

  .container {
    width: 100%;
    height: 50vh;
    display: inline-flex;
    padding: 500px;
    text-align: center;
    justify-content: center;
  }

  .input-title {
    font-size: 24px;
    width: 20em;
  }

  .request-input {
    font-size: 24px;
    width: 20em;  height: 10em;
  }

  .post-input {
    font-size: 18px;
    width: 5em;
  }
  
  .label-title {
    font-size: 22px;
    width: 20em;
  }

  .heading {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    color: var(--color4);
    text-shadow: 0 0 10px var(--color2);
    padding-bottom: 1rem;
  }

  #input-submit {
    font-size: 24px;
  }
`;

const Submission = (props) => {
  const [state, setState] = useState({
    Name: "",
  });

  const changeHandler = (e) => {
<<<<<<< HEAD
=======

>>>>>>> bd9edd995ffe444e4e26ad1559c909f909c4479c
    const {target} = e;
    console.log("firing");
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'title') {
      setTitle(inputValue);
    } else if (inputType === 'description') {
      setDescription(inputValue);
    }else if  (inputType === 'postType'){
      setPostType(inputValue);
    }
<<<<<<< HEAD
=======

>>>>>>> bd9edd995ffe444e4e26ad1559c909f909c4479c
  };

  const onCreateName = () => {};
  return (
    <>
<<<<<<< HEAD
    <Bulletin />
=======

>>>>>>> bd9edd995ffe444e4e26ad1559c909f909c4479c
      <SubmissionContainer>
        <img src={img} alt="request-img" />
        <div className="container">
          <h2 className="heading"> Make Request Page </h2>
<<<<<<< HEAD
          <form className="form" onSubmit = {submitPost}>
          <div className="post-type">
            <label className="label-title" > Title : </label>{" "}
            <input 
              className="input-title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => changeHandler(e)}
            ></input>
          </div>
            <div className="post-type">
           <label className="label-title" > Post Type </label>{" "}
            <select className="post-input" name = "postType" onChange = {changeHandler}>
              <option value = "offer">offer</option>
              <option value = "request">request</option>
             </select> 
            </div>
            <div className="post-type">
             <label className="label-title" >Description: </label>{" "}
            <textarea
=======

          <form className="form">
            <label> Full Name : </label>{" "}
            <input
              type="text"
              name="Name"
              value={state.Name}
              onChange={changeHandler}
            ></input>
            <label> Requested Service : </label>{" "}
            <input
              type="text"

>>>>>>> bd9edd995ffe444e4e26ad1559c909f909c4479c
              className="request-input"
              name="RequestedService"
              value={state.Name}
              onChange={changeHandler}
<<<<<<< HEAD
            ></textarea>
            <input id="input-submit" type = "submit"></input>
            </div>
=======

            ></input>
            <button type="button" name="Submit">
              {" "}
              Submit{" "}
            </button>

>>>>>>> bd9edd995ffe444e4e26ad1559c909f909c4479c
          </form>
        </div>
      </SubmissionContainer>
    </>
  );
};
export default Submission;
