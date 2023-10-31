import React from "react";
import NavBar from "./pages/navbar/navbar";
import AllRoutes from "./utils/routes";
import { BrowserRouter, } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
     <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
