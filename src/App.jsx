import React from "react";
import Navigation from "./Navigation/Navigation";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster position='bottom-right' toastOptions={{ duration: 2000 }} />
      <Navigation />
    </div>
  );
};

export default App;
