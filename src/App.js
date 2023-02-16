import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./resources/pages/home";
import { ModelS } from "./resources/pages/modelS";
import { Model3 } from "./resources/pages/model3";
import { ModelX } from "./resources/pages/modelX";
import { ModelY } from "./resources/pages/modelY";
import { SolarRoof } from "./resources/pages/solarRoof";
import { SolarPanel } from "./resources/pages/solarPanel";
import { Shop } from "./resources/pages/shop";
import { Account } from "./resources/pages/account";

function App() {
  return (
    <div className="AppWrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ModelS" element={<ModelS />} />
          <Route exact path="/Model3" element={<Model3 />} />
          <Route exact path="/ModelX" element={<ModelX />} />
          <Route exact path="/ModelY" element={<ModelY />} />
          <Route exact path="/SolarRoof" element={<SolarRoof />} />
          <Route exact path="/SolarPanel" element={<SolarPanel />} />
          <Route exact path="/Shop" element={<Shop />} />
          <Route exact path="/Account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
