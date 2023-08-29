import React from "react";
import "./MenuItem.css";

const MenuItem = ({ category, name, desc, price, image }) => {
  return (
    <div className='menuItem-container'>
      <div className='row text-white'>
        {image && <img src={image} alt={name} />}
        <div className='category flex justify-center items-center text-[#E89314] font-extrabold text-xl tracking-widest mt-[1.5rem]'>
          {category}
        </div>
        <div className=' flex items-start justify-between'>
          <div className='left'>
            <h3 className='text-banana font-bold text-xl'>{name}</h3>
            <p className='text-grey mb-4'>{desc}</p>
          </div>
          <div className='right flex items-center gap-2'>
            <span>${price.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
