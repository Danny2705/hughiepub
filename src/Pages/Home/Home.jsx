import React from "react";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";
import Intro from "../../Components/Intro/Intro";
import Event from "../../Components/Events/Event";
import Menus from "../../Components/Menus/Menus";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Event />
      <Menus />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Home;
