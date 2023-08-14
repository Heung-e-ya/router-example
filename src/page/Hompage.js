import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hompage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/Product?q=pants");
  };
  return (
    <div>
      <h1>Hompage</h1>
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>go to product page</button>
    </div>
  );
};

export default Hompage;
