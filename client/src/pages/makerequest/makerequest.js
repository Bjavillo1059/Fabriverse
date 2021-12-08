import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import "../../pages/makerequest/makerequest.css";

function makerequest(props) {
    const [formState, setFormState] = useState({
      email: "",
      password: "",
    });
    const [login, { error }] = useMutation(LOGIN_USER);
    
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const { data } = await login({
          variables: {
            email: formState.email,
            password: formState.password,
          },
        });
        const token = data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    return (    
      <div className="login-container">
        
        <img src={ img } alt="login-img" />      
  
        <h2 className="login-items">Login</h2>
        <Link className="login-items" id="gotoSignup" to="/signup">← Go to Signup</Link>
        <form className="login-items-form" onSubmit={handleFormSubmit}>
          <div className="login-items flex-row space-between my-2">
            <label htmlFor="email">Email address:</label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="login-items flex-row space-between my-2">
            <label htmlFor="pwd">Password:</label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="login-items-error error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
          <div className="login-items flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>    
    );
  }
  
  export default makerequest;