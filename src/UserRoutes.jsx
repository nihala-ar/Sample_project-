import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";

import Navbar from "./Navbar";
import Register from "./Register";

function UserRoutes() {
  // const user = localStorage.getItem("user");
  // const navigate = useNavigate();

  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Navbar />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default UserRoutes;
