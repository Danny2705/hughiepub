import React, { useEffect, useState } from "react";
import { getAllItems, deleteItem } from "../api/api.service";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const GetMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await getAllItems();
        setMenu(res);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };
    fetchMenuItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteItem(id);
      toast.success("Delete successfully");
      setMenu(menu.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting menu item", error);
    }
  };

  return (
    <div className='w-full'>
      <table className='min-w-full bg-yellow border divide-y divide-gray-200'>
        <thead className='bg-gr bg-light-blue-hover'>
          <tr>
            <th
              scope='col'
              className='px-3 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black w-[110px]'
            >
              Category
            </th>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black'
            >
              Name
            </th>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black'
            >
              Description
            </th>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black'
            >
              Price
            </th>
            <th
              scope='col'
              className='px-6 py-3 font-medium text-[1rem] uppercase tracking-wider text-center text-black'
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {menu.map((item, index) => (
            <tr
              key={item._id}
              className={`border-b border-gray-400 text-center ${
                index % 2 === 0 ? "bg-blue-100" : "bg-pink-100"
              }`}
            >
              <td className='text-center border-r-2 py-2 w-[110px]'>
                {item.category
                  .toLowerCase()
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </td>
              <td className='text-center border-r-2 py-2'>{item.name}</td>
              <td className='flex border-r-2 items-center justify-center w-[500px] py-2'>
                {item.desc}
              </td>
              <td className='text-center border-r-2 py-2 w-[20px]'>
                ${item.price}
              </td>
              <td className='text-center flex items-center justify-center py-2 h-full my-auto'>
                <Link to={`/update-menu/${item._id}`}>
                  <button className='mr-2 bg-green-400 py-1 px-2 rounded-lg my-auto'>
                    Update
                  </button>
                </Link>
                <button
                  className='text-white bg-red py-1 px-2 rounded-lg my-auto'
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {menu.length === 0 && (
            <tr>
              <td colSpan='5' className='text-center p-4'>
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetMenu;
