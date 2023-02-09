import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { ModelYData } from "../data/ModelYData";
import "../styles/ModelY.css";

export function ModelY() {
  const [menuCoverClass, setMenuCoverClass] = useState(
    "menuCoverPage displayNone"
  );
  return (
    <div className="modelY">
      <header className="modelYHeader">
        <NavBar setMenuCoverClasss={setMenuCoverClass} />
      </header>
      <main className="modelYMain">
        <SigleItemFirstView ItemFirstData={ModelYData} />
        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
