import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import Categories from "./Categories";

const CategoryDrawer = () => {
  return (
    <div className="drawer w-fit z-20 min-[1140px]:hidden">
      <input id="category_drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="category_drawer" className=" cursor-pointer">
          <IoMenuOutline size={24} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="category_drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Categories />
      </div>
    </div>
  );
};

export default CategoryDrawer;
