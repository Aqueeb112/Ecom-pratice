import React from "react";
import Products from "./Products";

const Allproducts = () => {
  return (
    <div className="mt-8 px-4 bg-gray-600">
      <h4 className="text-3xl text-yellow-100">All Products </h4>
      <div className="flex items-center justify-center my-8"></div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div>
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
