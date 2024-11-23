"use client";

import Image from "next/image";
import React from "react";
import { RiSettings5Fill } from "react-icons/ri";
import Settings from "./Settings";

const SettingsDrawer = () => {
  const [activeSetting, setActiveSetting] = React.useState("language");
  return (
    <div className="drawer drawer-end w-fit min-[1640px]:hidden z-10">
      <input id="setting_drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="setting_drawer" className=" cursor-pointer">
          <RiSettings5Fill size={24} color="#1fa45b" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="setting_drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <Settings />
      </div>
    </div>
  );
};

export default SettingsDrawer;
