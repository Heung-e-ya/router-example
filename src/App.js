import "./App.css";
import { useState } from "react";
import Hompage from "./page/Hompage";
import Aboutpage from "./page/Aboutpage";
import Productpage from "./page/Productpage";
import Detailpage from "./page/Detailpage";
import Loginpage from "./page/Loginpage";
import UserPage from "./page/UserPage";
import { Routes, Route, Link, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const PrivateRoute = () => {
    return authenticate == true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hompage />} />
        <Route path="/About" element={<Aboutpage />} />
        <Route path="/Product" element={<Productpage />} />
        <Route path="/products/:id" element={<Detailpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
