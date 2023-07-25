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

const MenuItem = ({ category, name, desc, price, image }) => {
  return (
    <div>
      <div className='row text-white'>
        {image && (
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover mx-auto my-7'
          />
        )}

        {category && (
          <div className='category flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest mt-[3rem]'>
            {category}
          </div>
        )}
        <div className=' flex items-start justify-between'>
          <div className='left'>
            <h3 className='text-banana font-bold text-xl'>{name}</h3>
            <p className='text-grey mb-4'>{desc}</p>
          </div>
          <div className='right'>
            <span>${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const getCategoryImage = (category) => {
  switch (category) {
    case "APPETIZERS":
      return FoodPic;
    case "SOUP & SALAD":
      return Burger;
    case "HALF & HALF":
      return Sandwich;
    case "BEVERAGES":
      return Pepsi;
    case "SANDWICHES":
      return BurgerAndFries;
    case "ENTRÉE":
      return Entree;
    default:
      return null;
  }
};

const Menu = () => {
  return (
    <div className='menu-wrapper'>
      <div className='menu-container'>
        <Header />
        <div className='image-container innerWidth h-[75vh]'>
          <img
            src={MenuImage}
            alt='menu'
            className='w-full h-full object-cover'
          />
          <span className='text-white text-[6rem]'>Menu</span>
        </div>
        <div className='menuList-container px-[9rem] py-[3rem] bg-black innerWidth flex flex-col items-center justify-center'>
          <div>
            {MenuList.map((item, i) => (
              <MenuItem
                key={i}
                category={
                  item.name === "Some of the Day"
                    ? "SOUP & SALAD"
                    : item.name === "Bangers & Mash"
                    ? "APPETIZERS"
                    : item.name === "Soup & Salad"
                    ? "HALF & HALF"
                    : item.name === "Hot Tea or Coffee"
                    ? "BEVERAGES"
                    : item.name === "Irish BLT"
                    ? "SANDWICHES"
                    : item.name === "Shepherd's Pie"
                    ? "ENTRÉE"
                    : ""
                }
                name={item.name}
                desc={item.desc}
                price={item.price}
                image={getCategoryImage(
                  item.name === "Some of the Day"
                    ? "SOUP & SALAD"
                    : item.name === "Bangers & Mash"
                    ? "APPETIZERS"
                    : item.name === "Soup & Salad"
                    ? "HALF & HALF"
                    : item.name === "Hot Tea or Coffee"
                    ? "BEVERAGES"
                    : item.name === "Irish BLT"
                    ? "SANDWICHES"
                    : item.name === "Shepherd's Pie"
                    ? "ENTRÉE"
                    : ""
                )}
              />
            ))}
          </div>

          <div className='addText text-yellow flex flex-col justify-center items-center gap-[1rem] w-[60%] mt-2'>
            <span className='text-center'>
              *Please be aware that we use a common fryer & grill. Due to these
              circumstances, we are unable to guarantee that any menu item can
              be completely free of allergens*
            </span>
            <span className='text-center'>
              Free Wifi: hughie-guest - Password: hughie100
            </span>
            <span className='text-center'>
              118 Stephen Street, Lemon IL 60439 - 630.312.8152
            </span>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
