import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { Model3Data } from "../data/Model3Data";
import "../styles/Model3.css";

export function Model3() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="model3">
      <header className="model3Header">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="model3Main">
        <SigleItemFirstView ItemFirstData={Model3Data} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
