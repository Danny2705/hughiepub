import React from "react";
import Header from "../../Components/Header/Header";
import MenuImage from "../../Assets/Images/MenuImage.png";
import "./Menu.css";
import Footer from "../../Components/Footer/Footer";
import FoodPic from "../../Assets/Images/foodPic.png";
import MenuList from "../../Data/FoodList";
import Entree from "../../Assets/Images/entree.png";
import Sandwich from "../../Assets/Images/sandwich.png";
import Pepsi from "../../Assets/Images/pepsi.png";
import BurgerAndFries from "../../Assets/Images/burgerAndFries.png";
import Burger from "../../Assets/Images/burger.png";

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <div className='menu-container'>
        <Header />
        <div className='image-container innerWidth h-[75vh]'>
          <img
            src={MenuImage}
            alt='menu image'
            className='w-full h-full object-cover'
          />

          <span className='text-white text-[6rem]'>Menu</span>
        </div>

        <div className='menuList-container px-[9rem] py-[3rem] bg-black innerWidth flex flex-col items-center justify-center'>
          <img src={FoodPic} alt='food Picture' width={800} />

          <div className='flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest mt-[3rem]'>
            * APPETIZERS *
          </div>
          <div>
            {MenuList.food.map((item, i) => {
              if (item.name === "Some of the Day") {
                return (
                  <div key={i}>
                    <img src={Burger} alt='Burger' width={800} className='mx-auto my-7'/>
                    <div className='flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest'>
                      * SOUP & SALAD *
                    </div>
                    <div className='row text-white flex items-center justify-between'>
                      <div className='left'>
                        <h3 className='text-banana font-bold text-xl'>
                          {item.name}
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                      <div className='right'>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.name === "Soup & Salad") {
                return (
                  <div key={i}>
                    <img src={Sandwich} alt='Sandwich' width={800} className='mx-auto my-7'/>
                    <div className='flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest'>
                      * HALF & HALF *
                    </div>
                    <div className='row text-white flex items-center justify-between'>
                      <div className='left'>
                        <h3 className='text-banana font-bold text-xl'>
                          {item.name}
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                      <div className='right'>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.name === "Hot Tea or Coffee") {
                return (
                  <div key={i}>
                    <img src={Pepsi} alt='Pepsi' width={800} className='mx-auto my-7'/>
                    <div className='flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest'>
                      * BEVERAGES *
                    </div>
                    <div className='row text-white flex items-center justify-between'>
                      <div className='left'>
                        <h3 className='text-banana font-bold text-xl'>
                          {item.name}
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                      <div className='right'>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.name === "Irish BLT") {
                return (
                  <div key={i}>
                    <img src={BurgerAndFries} alt='BurgerAndFries' width={800} className='mx-auto my-7'/>
                    <div className='flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest'>
                      * SANDWICHES *
                    </div>
                    <p className='text-blue'>
                      Served with coleslaw Add fries, mashed potatoes or a side
                      of baked beans - $3.50 Add sweet potato fries, onion
                      rings, cup of soup or side salad - $4.0.0
                    </p>
                    <div className='row text-white flex items-center justify-between'>
                      <div className='left'>
                        <h3 className='text-banana font-bold text-xl'>
                          {item.name}
                        </h3>
                        <p>{item.desc}</p>
                      </div>
                      <div className='right'>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.name === "Shepherd's Pie") {
                return (
                  <div key={i}>
                    <img src={Entree} alt='Entree' width={800} className='mx-auto my-7'/>
                    <div className='flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest'>
                      * ENTRÉE *
                    </div>
                    <div className='row text-white flex items-center justify-between gap-4 flex-wrap'>
                      <div className='left'>
                        <h3 className='text-banana font-bold text-xl mb-6'>
                          {item.name}
                        </h3>
                        <p className="text-grey">{item.desc}</p>
                      </div>
                      <div className='right'>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <div className='row text-white flex items-center justify-between'>
                      <div className='left'>
                        <h3 className='text-banana font-bold text-xl'>
                          {item.name}
                        </h3>

                        <p>{item.desc}</p>
                      </div>

                      <div className='right'>
                        <span>${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Menu;
