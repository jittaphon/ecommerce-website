import React from "react";
import Home from "../Page/Home";
import ProductPage from "../Page/Product";
import { Route, Routes, useLocation } from "react-router-dom";
const Router_ALL = () => {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/*" element={<Home />} />
      <Route path="/about" />
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  );
};

export default Router_ALL;
