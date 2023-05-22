import React, { useState, useEffect } from "react";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";
import { TeslaLogin } from "../../components/TeslaLogin";
import { postLoginAsync, selecAccount, clearLogin } from "./accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TransparentButton } from "../../components/transparentButton";
import { UserInfo } from "../../components/UserInfo";

import "./account.scss";

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userSelect, setUserSelect] = useState(true);
  const [orderSelect, setOrderSelect] = useState(false);
  const [carSelect, setCarSelect] = useState(false);
  const { user } = useSelector(selecAccount);
  const { token, role } = user || "";
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    dispatch(postLoginAsync({ email, password }));
  };
  const handleLogout = () => {
    dispatch(clearLogin());
  };

  const handleUserClick = () => {
    setUserSelect(true);
    setOrderSelect(false);
    setCarSelect(false);
    /* Dispatch users fetch */
  };
  const handleOrderClick = () => {
    setUserSelect(false);
    setOrderSelect(true);
    setCarSelect(false);
    /* Dispatch orders fetch */
  };
  const handleCarClick = () => {
    setUserSelect(false);
    setOrderSelect(false);
    setCarSelect(true);
    /* Dispatch cars fetch */
  };

  if (token) {
    if (role === "admin") {
      return (
        <div className="user">
          <header>
            <NavBar setMenuCoverClasss={setMenuCoverClass} />
          </header>
          <main className="user__main">
            <section className="user__container">
              <article className="user__title">
                <h3>Admin Account</h3>
              </article>
              <article className="user__info-container">
                <span className="user__menu">
                  <h4 className="user__menu-title">Menu</h4>
                  <button
                    className="user__selector-button"
                    onClick={handleUserClick}
                  >
                    User
                  </button>
                  <button
                    className="user__selector-button"
                    onClick={handleOrderClick}
                  >
                    Orders
                  </button>
                  <button
                    className="user__selector-button"
                    onClick={handleCarClick}
                  >
                    Cars
                  </button>
                </span>
                <span className="user__info">
                  {userSelect && <UserInfo />}
                  {orderSelect && (
                    <div>
                      <p>Order</p>
                    </div>
                  )}
                  {carSelect && (
                    <div>
                      <p>Car</p>
                    </div>
                  )}
                </span>
              </article>

              <article className="user__logout">
                <TransparentButton text={"Logout"} handleOrder={handleLogout} />
              </article>
            </section>
          </main>
        </div>
      );
    } else {
      return (
        <div>
          <header>
            <NavBar setMenuCoverClasss={setMenuCoverClass} />
          </header>
          <main>
            <h2>Costumer account</h2>
          </main>
          <footer>
            <TransparentButton text={"Logout"} handleOrder={handleLogout} />
          </footer>
        </div>
      );
    }
  } else {
    return (
      <div className="Shop">
        <header>
          <NavBar setMenuCoverClasss={setMenuCoverClass} />
        </header>
        <main>
          <TeslaLogin handleSubmit={handleSubmit} />
          <Menu
            menuCoverClasss={menuCoverClass}
            setMenuCoverClasss={setMenuCoverClass}
          />
        </main>
        <footer></footer>
      </div>
    );
  }
};

export default Account;
