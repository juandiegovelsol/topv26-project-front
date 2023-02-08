import React, { useState } from "react";
import { Menu } from "./Menu.js";
import { NavBar } from "./NavBar.js";

export function Account() {
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
}
