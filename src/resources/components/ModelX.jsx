import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

export function ModelX() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="ModelX">
      <header>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main>
        Model X
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
