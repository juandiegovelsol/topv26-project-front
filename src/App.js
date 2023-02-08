import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./resources/components/Home";
import { ModelS } from "./resources/components/ModelS";
import { Model3 } from "./resources/components/Model3";
import { ModelX } from "./resources/components/ModelX";
import { ModelY } from "./resources/components/ModelY";
import { SolarRoof } from "./resources/components/SolarRoof";
import { SolarPanel } from "./resources/components/SolarPanel";
import { Shop } from "./resources/components/Shop";
import { Account } from "./resources/components/Account";

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
