import React, { useState } from "react";
import { Menu } from "./Menu";
import { NavBar } from "./NavBar";
import { SigleItemFirstView } from "./SingleItemFirstView";
import { Model3Data } from "../data/Model3Data";
import { ArticleInterior } from "./ArticleInterior";
import model_s_interior from "../images/Model-S-Interior.jfif";
import model_3 from "../styles/Model3.css";

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
        <ArticleInterior
          h4Text={"Interior of the future"}
          imageSrc={model_s_interior}
        />
        {/* <section className="modelSInterior">
          <h4>Interior of the future</h4>
          <article>
            <img src={model_s_interior} alt="model-s-interior" />
          </article>
        </section> */}

        <Menu
          menuCoverClasss={menuCoverClass}
          setMenuCoverClasss={setMenuCoverClass}
        />
      </main>
      <footer></footer>
    </div>
  );
}
