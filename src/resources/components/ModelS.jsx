import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";

export function ModelS() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="ModelS">
      <header>
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main>
        Model S
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
