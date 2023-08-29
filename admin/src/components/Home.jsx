import React, { useState } from "react";
import "./Home.css";
import Header from "./Header";
import GetEvent from "./GetEvent";
import GetMenu from "./GetMenu";

const Home = () => {
  const [activeTab, setActiveTab] = useState("events");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <div className='padding'>
        <div className='flex gap-4'>
          <button
            className={`text-xl border py-1 px-3 shadow-xl bg-slate-300 hover:bg-slate-400 transition-all duration-200 rounded-xl font-bold text-red mb-4 tab-button ${
              activeTab === "events" ? "active" : ""
            }`}
            onClick={() => handleTabChange("events")}
          >
            Events
          </button>
          <button
            className={`text-xl border py-1 px-3 shadow-xl bg-slate-300 hover:bg-slate-400 transition-all duration-200 rounded-xl font-bold text-red mb-4 tab-button ${
              activeTab === "menu" ? "active" : ""
            }`}
            onClick={() => handleTabChange("menu")}
          >
            Menu
          </button>
        </div>
        {activeTab === "events" && <GetEvent />}
        {activeTab === "menu" && <GetMenu />}
      </div>
    </div>
  );
};

export default Home;
