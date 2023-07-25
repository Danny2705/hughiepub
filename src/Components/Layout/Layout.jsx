import React, { useState } from "react";
import Header from "../../Components/Header/Header";

const Layout = ({ children }) => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <Header count={count} />
      {children}
    </div>
  );
};

export default Layout;
