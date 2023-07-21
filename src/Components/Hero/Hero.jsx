import React from "react";
import HeroImage from "../../Assets/Images/Hero.jpg";

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='hero-container innerWidth h-[75vh]'>
        <img
          src={HeroImage}
          alt='Hero'
          className='image w-full h-full object-cover'
        />
      </div>
    </div>
  );
};

export default Hero;
