import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Menu from "./components/menu/Menu.jsx";
import ContactUs from "./pages/ContactUs.jsx";
// import SecondPage from "./pages/SecondPage.jsx";
// import FifthPage from "./pages/FifthPage.jsx";
// import SixthPage from "./pages/SixthPage.jsx";
// import ThirdPge from "./pages/ThirdPge.jsx";
// import Layout from "./components/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/menu" element={<SecondPage />} />
        <Route path="/gallery" element={<ThirdPge />} />
        <Route path="/about" element={<FifthPage />} />
        <Route path="/contact" element={<SixthPage />} />
        <Route path="/layout" element={<Layout />} /> */}
        <Route path="menu" element={<Menu />} />
        <Route path="contactUs" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
