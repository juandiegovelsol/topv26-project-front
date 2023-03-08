import React, { useState } from "react";
import { Menu } from "../../components/menu";
import { NavBar } from "../../components/navBar";

const Account = () => {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="Shop">
      <header>
        {/* This navbar must change for this component */}
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main>
        Account
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
