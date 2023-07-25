import React from "react";
import Salad from "../../Assets/Images/salad.png";
import { CiSquareRemove } from "react-icons/ci";
import "./Cart.css";
import Layout from "../../Components/Layout/Layout";

const Cart = () => {
  return (
    <Layout>
      <div className='cart-wrapper bg-yellow'>
        <div className='cart-container'>
          <div className='main-cart flex innerWidth'>
            <div className='items-center justify-around w-[60%]'>
              <h2 className='padding font-bold text-2xl text-blue'>
                Your Food Order
              </h2>
              <div className='pl-[9rem] py-[1.5rem] flex justify-start items-center food-item'>
                <div className='flex flex-1 flex-col gap-4 items-center justify-center'>
                  <img src={Salad} alt='salad' width={120} />
                  <span>Crisp Caesar Salad </span>
                </div>
                <div className='image-quantity flex-1 flex items-center justify-center gap-5'>
                  <span className='text-2xl cursor-pointer'> - </span>
                  <span className=' bg-white px-3 py-1 rounded-[50%]'>0</span>
                  <span className='text-2xl cursor-pointer'> + </span>
                </div>
                <button className='cursor-pointer flex-1'>
                  <CiSquareRemove className='text-3xl border-none text-red' />
                </button>
              </div>
            </div>
            <div className='pt-[1.5rem] w-[40%] pr-[9rem] flex flex-col gap-[2rem]'>
              <span className='font-bold text-2xl'>Summary</span>
              <div className='flex items-center justify-between'>
                <span>SubTotal: </span>
                <span>$ </span>
              </div>
              <div className='flex items-center justify-between'>
                <span className='font-bold'>Total Price: </span>
                <span className='font-bold'>$ </span>
              </div>
              <button className='bg-[#0a945d] border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white flex mx-auto'>
                Process to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
