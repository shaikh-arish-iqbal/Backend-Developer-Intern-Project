import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
