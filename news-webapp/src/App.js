import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import './styles/globals.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="technology" element={<Category />} />
          <Route path="lifestyle" element={<Category />} />
          <Route path="sport" element={<Category />} />
          <Route path="education" element={<Category />} />
          <Route path="business" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
