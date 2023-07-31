import React, { useState, useEffect } from "react";
import ItemComponent from "./ItemComponent";
import Cart from "./Cart";
import { getAllItems } from "../../services/api.service";

const ItemsList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  // Fetch items when the component mounts
  useEffect(() => {
    async function fetchItems() {
      try {
        const itemsData = await getAllItems();
        setItems(itemsData);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    }

    fetchItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <ItemComponent
          key={item._id} // Assuming you have an "_id" field in your MongoDB items
          name={item.name}
          desc={item.desc}
          price={item.price}
          image={item.image}
          category={item.category}
          handleAddToCart={() => handleAddToCart(item)}
        />
      ))}
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default ItemsList;
