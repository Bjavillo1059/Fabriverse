import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import img from "../../../src/images/request-img.jpg";

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
  const [state, setState] = useState({
    Name: "",
  });

  const changeHandler = (e) => {
    this.setState({ Name: e.target.value });
  };

  const onCreateName = () => {};
  return (
    <>
      <SubmissionContainer>
        <img src={img} alt="request-img" />
        <div className="container">
          <h2 className="heading"> Make Request Page </h2>
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
              className="request-input"
              name="RequestedService"
              value={state.Name}
              onChange={changeHandler}
            ></input>
            <button type="button" name="Submit">
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </SubmissionContainer>
    </>
  );
};
export default Submission;
