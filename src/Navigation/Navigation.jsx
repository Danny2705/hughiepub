import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Events from "../Pages/Events/Events";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/events' element={<Events />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
