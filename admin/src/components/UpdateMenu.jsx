import React, { useEffect } from "react";
import Datetime from "react-datetime";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { updateItem, getItemById } from "../api/api.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./AddEvent.css";

export default function UpdateMenu() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getItemById(id);

        if (response) {
          setName(response.name);
          setDesc(response.desc);
          setPrice(response.price);
        } else {
          console.log("Response does not contain data:", response);
        }
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    fetchEvent();
  }, [id]);

  const onSubmit = async () => {
    const updatedEvent = {
      name,
      desc,
      price,
    };

    try {
      await updateItem(id, updatedEvent);
      toast.success("Updated successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen mx-auto'>
      <Link to='/' className='text text-blue underline w-[900px] pl-2 mb-4'>
        <span className='text-xl'>Turn Back</span>
      </Link>
      <div className='flex items-center justify-center'>
        <table className='bg-yellow rounded-xl  w-[900px]'>
          <thead>
            <tr>
              <th className='px-4 pb-2 pt-5 font-bold text-blue'>Name</th>
              <th className='px-4 pb-2 pt-5 font-bold text-blue'>
                Description
              </th>
              <th className='px-4 pb-2 pt-5 font-bold text-blue'>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='p-4'>
                <textarea
                  placeholder='Type the title of the event'
                  value={name}
                  style={{ height: "236px" }}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full p-2 outline-none rounded-lg'
                  required
                />
              </td>
              <td className='p-4'>
                <textarea
                  value={desc}
                  required
                  style={{ height: "236px" }}
                  onChange={(e) => setDesc(e.target.value)}
                  className='w-full p-2 outline-none rounded-lg'
                />
              </td>
              <td className='p-4 flex items-center justify-start'>
                <input
                  value={price}
                  required
                  onChange={(e) => setPrice(e.target.value)}
                  className='w-full p-2 outline-none rounded-lg text-center'
                />
              </td>
            </tr>
            <tr>
              <td colSpan='3' className='p-4'>
                <button
                  onClick={onSubmit}
                  className='w-full bg-red border-2 border-white px-3 py-1 rounded-md text-white font-semibold transition-all duration-300 ease-in hover:scale-105'
                >
                  Update Menu
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
