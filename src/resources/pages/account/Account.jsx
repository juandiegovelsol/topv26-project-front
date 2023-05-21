import React, { useState, useEffect } from "react";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { TeslaLogin } from "../../components/TeslaLogin";
import { postLoginAsync, selecAccount, clearLogin } from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selecAccount);
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    dispatch(postLoginAsync({ email, password }));
  };

  useEffect(() => {
    if (user.token) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    dispatch(clearLogin());
  }, []);

  return (
    <div className="Shop">
      <header>
        {/* This navbar must change for this component */}
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main>
        <TeslaLogin handleSubmit={handleSubmit} />
        {/*  This menu must change for this component */}
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
};

export default Account;
