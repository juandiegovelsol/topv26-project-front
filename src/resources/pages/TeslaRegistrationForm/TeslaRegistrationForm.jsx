import React, { useState } from "react";
import "./teslaRegistrationForm.css";

function TeslaRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
   const handleConfPasswordChange = (event) => {
     setConfPassword(event.target.value);
   };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, like submitting it to a server
    console.log(firstName, lastName, email, password,confpassword);
  };

  return (
    <div className="pre_form">
      <form onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confpassword}
            onChange={handleConfPasswordChange}
            required
          />
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default TeslaRegistrationForm;
