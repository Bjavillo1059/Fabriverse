import React, { useState } from "react";
import { Link } from "react-router-dom";

import img from "../../../src/images/hero-img.jpg";
import "../../pages/Signup/Signup.css";
import { useMutation } from "@apollo/client";

import Hero from "../../components/Hero/Hero";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

function Signup(props) {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({
      ...userFormData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          username: userFormData.username,
          email: userFormData.email,
          password: userFormData.password,
        },
      });

      const token = data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
      setShowAlert(true);
    }
    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-container">
      <Link className="signup-items" id="gotoLogin" to="/login">
        ← Go to Login
      </Link>

      <img src={img} alt="hero-img" className="hero-img" />

      <h2 className="signup-items">Sign Up</h2>
      <form
        className="signup-items-form"
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
      >
        <div className="signup-items flex-row space-between my-2">
          <label htmlFor="username">Your Username</label>
          <input
            placeholder="Username"
            name="username"
            type="text"
            id="username"
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
        </div>
        <div className="signup-items flex-row space-between my-2">
          <label htmlFor="email">Your Email address</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </div>
        <div className="signup-items flex-row space-between my-2">
          <label htmlFor="pwd">Your Password</label>
          <input
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </div>
        {error ? (
          <div>
            <p className="signup-items-error">Something went wrong with your signup!</p>
          </div>
        ) : null}
        <div className="signup-items flex-row flex-end">
        <button className="signup-items-button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

//  {error ? (
//    <div>
//      <p className="signup-items-error">Something went wrong with your signup!</p>
//    </div>
//  ) : null}

//     <label htmlFor="username">Username</label>
//     <input
//       type="text"
//       placeholder="Your username"
//       name="username"
//       onChange={handleInputChange}
//       value={userFormData.username}
//       required
//     />
//     <p type="invalid">
//       Username is required!
//     </p>

//   <div>
//     <label htmlFor="email">Email</label>
//     <input
//       type="email"
//       placeholder="Your email address"
//       name="email"
//       onChange={handleInputChange}
//       value={userFormData.email}
//       required
//     />
//     <p type="invalid">
//       Email is required!
//     </p>
//   </div>

//   <div>
//     <label htmlFor="password">Password</label>
//     <input
//       type="password"
//       placeholder="Your password"
//       name="password"
//       onChange={handleInputChange}
//       value={userFormData.password}
//       required
//     />
//     <p type="invalid">
//       Password is required!
//     </p>
//   </div>

//   <div className="signup-items fles-row flex end">
//   <button
//     disabled={
//       !(
//         userFormData.username &&
//         userFormData.email &&
//         userFormData.password
//       )
//     }
//     type="submit"
//     variant="success"
//   >
//     Submit
//   </button>
//   </div>