import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

export function ModelY() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="ModelY">
      <header>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main>
        Model Y
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
