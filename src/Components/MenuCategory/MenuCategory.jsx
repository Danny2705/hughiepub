import React from "react";
import MenuItem from "../../Pages/Menu/MenuItem";

const MenuCategory = ({ categoryName, menuItems, getCategoryImage }) => {
  return (
    <div>
      <h1>{categoryName}</h1>
      {menuItems
        .filter((item) => item.category === categoryName)
        .map((item, i) => (
          <MenuItem
            key={i}
            category={
              item.name === "Bangers & Mash" ||
              item.name === "Some of the Day" ||
              item.name === "Soup & Salad" ||
              item.name === "Hot Tea or Coffee" ||
              item.name === "Irish BLT" ||
              item.name === "Shepherd's Pie"
                ? categoryName
                : null
            }
            name={item.name}
            desc={item.desc}
            price={item.price}
            image={
              item.name === "Bangers & Mash" ||
              item.name === "Some of the Day" ||
              item.name === "Soup & Salad" ||
              item.name === "Hot Tea or Coffee" ||
              item.name === "Irish BLT" ||
              item.name === "Shepherd's Pie"
                ? getCategoryImage(categoryName)
                : null
            }
          />
        ))}
    </div>
  );
};

export default MenuCategory;
