import React, { useState } from "react";
import "./TeslaLogin.css";
import logo from "../../images/logo2.jfif";

const TeslaLogin = ({ handleSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="tesla-login-container">
      <img className="tesla-logo" src={logo} alt="Tesla Logo" />
      <h1 className="tesla-signin">Sign In</h1>
      <form className="tesla-login-form" onSubmit={handleSubmit}>
        <label className="tesla-login-label">Email or Mobile Number</label>
        <input
          className="tesla-login-input"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="tesla-login-label">Password</label>
        <input
          className="tesla-login-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="tesla-login-button" type="submit">
          Sign In
        </button>
      </form>
      <div className="tesla-login-links">
        <a className="tesla-login-link" href="/TeslaRegistrationForm">
          Create a count
        </a>
        <span className="tesla-login-link-divider">|</span>
        <a className="tesla-login-link" href="#">
          Forgot Email?
        </a>
        <span className="tesla-login-link-divider">|</span>
        <a className="tesla-login-link" href="#">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default TeslaLogin;

// Este componente incluye un div tesla-login-container que contiene una imagen del logotipo de Tesla y un formulario con dos campos de entrada para el nombre de usuario y la contraseña, así como un botón tesla-login-button para enviar el formulario. El componente también incluye dos enlaces en la parte inferior para "¿Olvidó su correo electrónico?" y "¿Olvidó su contraseña?".
