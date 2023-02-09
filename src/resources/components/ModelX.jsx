import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ModelXData } from "../data/ModelXData";
import "../styles/ModelX.css";

export function ModelX() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="modelX">
      <header className="modelXHeader">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="modelXMain">
        <SigleItemFirstView ItemFirstData={ModelXData} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
