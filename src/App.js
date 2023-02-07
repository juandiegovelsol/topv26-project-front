import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./resources/components/Home";
import { ModelS } from "./resources/components/ModelS";
function App() {
  return (
    <div className="AppWrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ModelS" element={<ModelS />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
