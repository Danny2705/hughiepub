import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectItemsList,
  addItem,
  clearItem,
  decreaseItem,
  removeItem,
} from "../../redux/content";
import Header from "../../Components/Header/Header";
import { CiSquareRemove } from "react-icons/ci";
import "./Cart.css";
import { useEffect, useState } from "react";
import { decrement, increment } from "../../redux/counter";

const Cart = () => {
  const cartItems = useSelector(selectItemsList);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate the total price based on the cart items
  const calculateTotalPrice = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalPrice(total);
  };

  const increaseItemQuantity = (item) => {
    dispatch(addItem({ ...item, quantity: item.quantity + 1 }));
    dispatch(increment());
  };

  const decreaseItemQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(decreaseItem({ ...item, quantity: item.quantity - 1 }));
      dispatch(decrement());
    } else {
      dispatch(removeItem({ name: item.name }));
      dispatch(decrement());
    }
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem({ name: item.name }));
    dispatch(decrement());
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <div className='cart-wrapper bg-yellow'>
      <Header />
      <div className='cart-container'>
        <div className='main-cart flex innerWidth pb-[1rem] justify-center innerWidth'>
          <div className='items-center justify-around w-[60%]'>
            <h2 className='padding font-bold text-2xl text-blue innerWidth'>
              Your Food Order
            </h2>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className='padding flex justify-between items-center food-item'
              >
                <div className='flex flex-col gap-4 items-center justify-start'>
                  {/* <img src={Salad} alt={item.name} width={120} /> */}
                  {item.name}
                </div>
                <div className='image-quantity flex-1 flex items-center justify-center gap-5'>
                  <button
                    className='text-2xl cursor-pointer'
                    onClick={() => decreaseItemQuantity(item)}
                  >
                    -
                  </button>
                  <span className=' bg-white px-3 py-1 rounded-[50%]'>
                    {item.quantity}
                  </span>
                  <button
                    className='text-2xl cursor-pointer'
                    onClick={() => increaseItemQuantity(item)}
                  >
                    +
                  </button>
                </div>
                <button className='cursor-pointer flex justify-end items-center'>
                  <CiSquareRemove
                    className='text-3xl border-none text-red'
                    onClick={() => handleRemoveItem(item)}
                  />
                </button>
              </div>
            ))}
          </div>

          <div className='summary pt-[1.5rem] w-[40%] pr-[9rem] flex flex-col gap-[2rem]'>
            <span className='font-bold text-2xl'>Summary</span>
            <div className='flex items-center justify-between'>
              <span>SubTotal: </span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='flex items-center justify-between'>
              <span className='font-bold'>Total Price: </span>
              <span className='font-bold'>${totalPrice.toFixed(2)}</span>
            </div>
            <button className='bg-[#0a945d] border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white flex mx-auto'>
              Process to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
