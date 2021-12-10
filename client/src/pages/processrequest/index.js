import React, { useState } from "react";
import {useMutation } from "@apollo/client";
import ReactDOM from "react-dom";
import styled from "styled-components";
import img from "../../../src/images/request-img.jpg";
import bulletin from "../bulletin/bulletin"

import{
  CREATE_NEW_POST,
} from "../../utils/mutations";

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

  .request-input {
    font-size: 24px;
    width: 10em;  height: 5em;
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
`;

  const Submission = (props) => {
  const [title, setTitle] = useState("");
  const [postType, setPostType] = useState("offer");
  const [description, setDescription] = useState("");
  const [createNewPost] = useMutation(CREATE_NEW_POST); 



  const changeHandler = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'title') {
      setTitle(inputValue);
    } else if (inputType === 'description') {
      setDescription(inputValue);
    }else if  (inputType === 'postType'){
      setPostType(inputValue);
    }
  };

  const submitPost = async (e) =>
  {
      e.preventDefault();
      createNewPost({variables: {input:{ postType: postType, description: description, title: title}}});
      alert(`The title of the new post is ${title}, the type is ${postType}, and the description is ${description}.`)
  }

  const onCreateName = () => {};
  return (
    <>
    <bulletin/>
      <SubmissionContainer>
        <img src={img} alt="request-img" />
        <div className="container">
          <h2 className="heading"> Make Request Page </h2>
          <form className="form" onSubmit = {submitPost}>
            <label> Title : </label>{" "}
            <input
              type="text"
              name="title"
              value={title}
              onChange={changeHandler}
            ></input>
           <label> Post Type </label>{" "}
            <select  name = "postType" onChange = {changeHandler}>
              <option value = "offer">offer</option>
              <option value = "request">request</option>
             </select> 
             <label>Description: </label>{" "}
            <textarea
              className="request-input"
              name="description"
              value={description}
              onChange={changeHandler}
            ></textarea>
            <input type = "submit"></input>
          </form>
        </div>
      </SubmissionContainer>
    </>
  );
};
export default Submission;
