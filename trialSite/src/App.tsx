// import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";
import Featured from "./components/Featured";
import CartDrawer from "./components/CartDrawer";

function App() {
  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<Featured />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/cart" element={<CartDrawer />} />
      </Routes>
    </>
  );
}

export default App;