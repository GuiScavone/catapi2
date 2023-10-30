import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Cats from "../pages/cats";
import Breeds from "../pages/breeds";
import Favorites from "../pages/favorites";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
