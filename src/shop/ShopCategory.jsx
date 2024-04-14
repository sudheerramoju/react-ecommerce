import React from "react";
import Data from "../products.json";

const ShopCategory = ({
  filterItem,
  setProducts,
  menuItems,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          onClick={() => setProducts(Data)}
          className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItems &&
          menuItems.map((Val, index) => {
            return (
              <button
                className={`m-2 ${
                  selectedCategory === Val ? "bg-warning" : ""
                }`}
                key={index}
                onClick={() => filterItem(Val)}
              >
                {Val}
              </button>
            );
          })}
      </div>
    </>
  );
};

export default ShopCategory;
