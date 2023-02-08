import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

export function Model3() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="Model3">
      <header>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main>
        Model 3
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
