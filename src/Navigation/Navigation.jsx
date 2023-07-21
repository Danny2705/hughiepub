import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "../Pages/EventPage/EventPage";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact/ContactPage";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Reserve/Reserve";
import Home from "../Pages/Home/Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/reserve' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
