import React from "react";
import NavBar from "./pages/navbar/navbar";
import AllRoutes from "./utils/routes";
import { BrowserRouter, } from "react-router-dom";
import { BodyApp } from "./Appstyled";


function App() {
  return (
    <BodyApp>
    <BrowserRouter>
      <NavBar />
     <AllRoutes />
    </BrowserRouter>
    </BodyApp>
  );
}

export default App;
