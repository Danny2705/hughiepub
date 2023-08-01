import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { addItem } from "../../redux/content";
import { useDispatch } from "react-redux";
import "./MenuItem.css";

const MenuItem = ({ category, name, desc, price, image, handleCount }) => {
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    handleCount();

    dispatch(
      addItem({
        name,
        desc,
        price,
        quantity: 1,
      })
    );
  };

  return (
    <div className='menuItem-container'>
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
          <div className='right flex items-center gap-2'>
            <span>${price.toFixed(2)}</span>
            <button
              className='text-xl text-[#02D48B]'
              title='Add to Cart'
              onClick={handleAddToCart}
            >
              {/* <AiFillPlusCircle /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
