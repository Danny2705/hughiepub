import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Events from "../Pages/Events/Events";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact/Contact";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Hero from "../Components/Hero/Hero";
import Intro from "../Components/Intro/Intro";
import Event from "../Components/Events/Event";
import Menus from '../Components/Menus/Menus';
import ContactInfo from '../Components/ContactInfo/ContactInfo';
import Footer from "../Components/Footer/Footer";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Intro />
      <Event />
      <Menus />
      <ContactInfo />
      <Footer />

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
