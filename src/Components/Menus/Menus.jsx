import React from "react";
import "./Menus.css";
import MenuItems from "../../Data/Menu.js";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className='menu-wrapper bg-black'>
      <div className='menu-container padding innerWidth'>
        <div className='menu-title text-xl font-bold text-yellow uppercase filter my-10'>
          Menu
        </div>

        <div className='menu mx-auto'>
          {MenuItems.items.map((item, i) => {
            return (
              <div className='menu-row flex items-center justify-around flex-wrap my-10 mx-auto gap-[12rem]'>
                <div className=' flex-1 menu-left flex items-center justify-end' key={i}>
                  <img src={item.image} alt={item.name} width={350} />
                </div>

                <div className='menu-right flex-1 h-full text-white flex flex-col items-start justify-center'>
                  <h2 className='font-bold text-xl mb-5'>{item.name}</h2>

                  <p className='menu-ingre w-[16rem] space-y-5 text-grey mb-5'>
                    {item.ingredient.split(",").map((ingredient, index) => (
                      <span key={index}>
                        - {ingredient.trim()}
                        <br />
                      </span>
                    ))}
                  </p>

                  <Link
                    to='/menu'
                    className='bg-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-red transition-all duration-300 ease-in hover:scale-110 btn'
                  >
                    View Menu
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
