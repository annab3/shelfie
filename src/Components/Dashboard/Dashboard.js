import React from "react";
import Product from "../Product/Product";

const Dashboard = props => {
  return (
    <div>
      {props.products.map((product, index) => (
        <Product
          product={product}
          key={index}
          deleteProduct={props.deleteProduct}
          setId={props.setId}
        />
      ))}
    </div>
  );
};

export default Dashboard;
