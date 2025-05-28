import React from "react";

const ProductsList = ({ children }) => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {children}
    </div>
  );
};

export default ProductsList;
