import React from "react";
import "./Intro.css";
import Logo from "../../Assets/Images/Celtic Knot Logo.png";
import Foam from "../../Assets/Images/foam.png";

const Intro = () => {
  return (
    <div className='intro-wrapper'>
      <div className='intro-container padding innerWidth flex items-center justify-start flex-wrap'>
        <div className='flex flex-col items-start flex-1 justify-center flex-wrap'>
          <div className='intro-title text-2xl font-bold text-yellow'>Who are we ...</div>
          <div className='intro-des space-y-4 mt-9 text-lg'>
            <p>
              Hughie McClafferty's is a traditional Irish Pub that offers a calm
              and relaxed atmosphere.
            </p>
            <p>
              Come and enjoy a meal where you'll find a warm welcome and
              delicious homemade Irish Food served daily.
            </p>
          </div>
        </div>
        <div className='knotLogo flex-1 flex justify-end items-center'>
          <img src={Logo} alt='Celtic Knot Logo' width={350} />
        </div>
      </div>

      <div className="innerWidth h-[250px]">
        <img src={Foam} alt='Foam' className="w-full h-full" />
      </div>
    </div>
  );
};

export default Intro;
