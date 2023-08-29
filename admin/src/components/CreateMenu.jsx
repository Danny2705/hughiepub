import React, { useState } from "react";
import { createItem } from "../api/api.service";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import "./CreateMenu.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

const CreateMenu = () => {
  const [category, setCategory] = useState("APPETIZERS");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newItem = {
        category,
        name,
        description,
        price,
      };
      await createItem(newItem);
      toast.success("Menu item added successfully");
      navigate("/");
    } catch (error) {
      console.error("Error adding menu item", error);
      toast.error("Error adding menu item");
    }
  };

  return (
    <div className='create-menu-container padding'>
      <Link to='/' className='text text-blue underline mb-4'>
        <span className='text-xl'>Turn Back</span>
      </Link>
      <h2 className='text-xl text-center'>Create Menu Item</h2>
      <form onSubmit={handleSubmit} className='menu-form'>
        <div className='form-group'>
          <label htmlFor='category'>Category:</label>
          <select
            id='category'
            value={category}
            onChange={handleCategoryChange}
            className='input-category'
          >
            <option value='APPETIZERS'>Appetizers</option>
            <option value='SOUP & SALAD'>Soup & Salad</option>
            <option value='HALF & HALF'>Half & Half</option>
            <option value='BEVERAGES'>Beverages</option>
            <option value='SANDWICHES'>Sandwiches</option>
            <option value='ENTRÉE'>Entrée</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='outline-none border-2 h-[42.4px]'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='outline-none border-2 h-[42.4px]'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Price:</label>
          <input
            type='number'
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='outline-none border-2 h-[42.4px]'
          />
        </div>
        <button type='submit' className='submit-button'>
          Add Menu Item
        </button>
      </form>
    </div>
  );
};

export default CreateMenu;
