import React, { useState, useEffect } from "react";
import "./teslaRegistrationForm.scss";
import {
  postRegisterAsync,
  selecAccount,
  clearRegister,
  postLoginAsync,
} from "../account/accountSlice";
import { sendSigninEmailAsync } from "../../email/emailSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../../components/navBar";

function TeslaRegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, register } = useSelector(selecAccount);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );

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
    const name = event.target.elements[0].value;
    const lastname = event.target.elements[1].value;
    const email = event.target.elements[2].value;
    const password1 = event.target.elements[3].value;
    const password2 = event.target.elements[4].value;
    const role = event.target.elements[5].value;
    if (password1 === password2) {
      if (name && lastname && email && role) {
        const password = password1;
        dispatch(postRegisterAsync({ email, password, name, lastname, role }));
      }
    }
  };

  useEffect(() => {
    if (Object.keys(register).length) {
      const name = firstName;
      const lastname = lastName;
      dispatch(postLoginAsync({ email, password }));
      dispatch(sendSigninEmailAsync({ email, name, lastname }));
    }
  }, [register]);

  useEffect(() => {
    if (Object.keys(user).length) {
      navigate("/Account");
    }
  }, [user]);

  return (
    <div className="pre_form">
      <header>
        <NavBar setMenuCoverClass={setMenuCoverClass} />
      </header>
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
        <label className="select-label">
          Select your role:
          <select className="select">
            <option value="costumer">Costumer</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default TeslaRegistrationForm;
