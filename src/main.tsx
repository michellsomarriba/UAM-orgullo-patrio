import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router";

import App from "./App";
import Cangrejos from "./pages/Cangrejos";
import Caracoles from "./pages/Caracoles";
import Home from "./pages/Home";
import Mariscos from "./pages/Mariscos";
import PanDeCoco from "./pages/PanDeCoco";
import Pati from "./pages/Pati";
import Rondon from "./pages/Rondon";
import Specialties from "./pages/Specialties";

import "./index.css";

const basename = import.meta.env.BASENAME || "/";

console.log("Using basename:", basename);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/mariscos" element={<Mariscos />} />
          <Route path="/caracoles" element={<Caracoles />} />
          <Route path="/cangrejos" element={<Cangrejos />} />
          <Route path="/rondon" element={<Rondon />} />
          <Route path="/pan-de-coco" element={<PanDeCoco />} />
          <Route path="/pati" element={<Pati />} />
        </Route>
        {/* <Route index element={<Home />} />
        <Route path="/mariscos" element={<Mariscos />} />
        <Route path="/caracoles" element={<Caracoles />} />
        <Route path="/cangrejos" element={<Cangrejos />} />
        <Route path="/rondon" element={<Rondon />} />
        <Route path="/pan-de-coco" element={<PanDeCoco />} />
        <Route path="/pati" element={<Pati />} /> */}
      </Routes>
    </Router>
  </StrictMode>
);
