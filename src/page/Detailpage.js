import React from "react";
import { useParams } from "react-router-dom";

const Detailpage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Detailpage {id}</h1>
    </div>
  );
};

export default Detailpage;
