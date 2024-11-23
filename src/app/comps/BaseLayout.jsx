import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Settings from "./Settings";
import Categories from "./Categories";
import BottomNavbar from "./BottomNavbar";

const BaseLayout = ({ children }) => {
  return (
    <div className="flex gap-6 h-screen w-[100%] min-[1140px]:px-4 min-[1280px]:px-10 min-[1280px]:pt-6 overflow-hidden">
      <Navbar />
      <div className="w-full flex flex-col gap-7">
        <Header />
        <div className="flex gap-7">
          <div className="hidden min-[1140px]:block">
            <Categories />
          </div>
          <main className="flex-1 pb-20 overflow-scroll" style={{ height: "calc(100vh - 110px)" }}>
            {children}
          </main>
          <div className="hidden min-[1640px]:block h-full">
            <Settings />
          </div>
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default BaseLayout;
