import React, { useState } from "react";
import { BiUpload } from "react-icons/bi";
import { toast } from "react-hot-toast";
import "./Resume.css";

export default function Resume() {
  const [userData, setUserData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    resume: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUserData((prevUserData) => ({
      ...prevUserData,
      resume: file,
    }));
  };

  const sendResume = async (e) => {
    e.preventDefault();

    if (!userData.user_name || !userData.user_email || !userData.message) {
      toast.error("All fields are required");
      return;
    }
    const formData = new FormData();
    formData.append("resume", userData.resume);
    formData.append("user_name", userData.user_name);
    formData.append("user_email", userData.user_email);
    formData.append("message", userData.message);

    try {
      const response = await fetch("http://localhost:5000/api/mail/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast.success("Resume uploaded successfully!");
      } else {
        console.log("Error uploading resume.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='resume w-full'>
      <form
        onSubmit={sendResume}
        className='upload-resume flex flex-col justify-start w-[31.25rem] mx-auto py-[4rem]'
      >
        <h2 className='text-blue font-bold text-left'>Job Application Form</h2>
        <div className='flex flex-col gap-[1rem] items-center mt-[2rem] mb-[3rem]'>
          <input
            type='text'
            name='user_name'
            value={userData.user_name}
            onChange={handleInputChange}
            height={50}
            placeholder='Enter your name:'
            className='placeholder-black bg-yellow outline-none w-full pl-3'
          />
          <input
            type='text'
            name='user_email'
            value={userData.user_email}
            onChange={handleInputChange}
            height={50}
            placeholder='Enter your email:'
            className='placeholder-black bg-yellow outline-none w-full pl-3'
          />
          <div className='flex gap-3 btn-upload relative cursor-pointer w-full'>
            <label
              htmlFor='resume'
              className={`py-4 px-4 bg-blue-500 text-black cursor-pointer outline-none bg-yellow placeholder-black w-full flex items-center gap-3 ${
                userData.resume ? "hidden" : ""
              }`}
            >
              <BiUpload className='text-lg' /> Resume Upload
            </label>
            <input
              type='file'
              id='resume'
              name='resume'
              onChange={handleFileChange}
              className='py-2 px-4 focus:outline-none focus:border-blue-500 bg-yellow flex justify-end file-upload cursor-pointer w-full h-full'
            />
            {userData.resume && (
              <span className='py-2 px-4 bg-gray-200 rounded-md w-full'>
                {userData.resume.name}
              </span>
            )}
          </div>

          <input
            type='text'
            name='message'
            value={userData.message}
            onChange={handleInputChange}
            placeholder='Leave a message:'
            className='detail placeholder-black bg-yellow pb-[10rem]  outline-none w-full pt-3 pl-3'
          />
          <input
            type='submit'
            value='Subscribe'
            className='bg-red border-2 border-white px-3 py-1.5 rounded-md justify-center items-center uppercase text-[1rem] font-[600] text-white transition-all duration-300 ease-in hover:scale-110 flex mx-auto cursor-pointer'
          />
        </div>
      </form>
    </div>
  );
}
