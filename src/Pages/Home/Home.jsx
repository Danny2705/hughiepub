import React from "react";
import Hero from "../../Components/Hero/Hero";
import Intro from "../../Components/Intro/Intro";
import Event from "../../Components/Events/Event";
import Menus from "../../Components/Menus/Menus";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import Footer from "../../Components/Footer/Footer";
import Layout from "../../Components/Layout/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Intro />
        <Event />
        <Menus />
        <ContactInfo />
        <Footer />
      </Layout>
    </div>
  );
};

export default Home;
