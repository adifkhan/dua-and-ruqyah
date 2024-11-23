import Image from "next/image";
import React from "react";

const BottomNavbar = () => {
  return (
    <div
      className="min-[1280px]:hidden fixed bottom-0 left-0 right-0 bg-white p-6 rounded-t-3xl "
      style={{ filter: "drop-shadow(0 -5px 5px rgba(0,0,0,0.1))" }}
    >
      <div className="flex items-center justify-between ">
        <Image src="/icons/home.png" alt="logo" width={20} height={20} className="cursor-pointer" />

        <Image src="/icons/menu.png" alt="logo" width={20} height={20} className="cursor-pointer" />

        <Image
          src="/icons/memorize.png"
          alt="logo"
          width={20}
          height={20}
          className="cursor-pointer"
        />

        <Image
          src="/icons/bookmark.png"
          alt="logo"
          width={20}
          height={20}
          className="cursor-pointer"
        />

        <Image
          src="/icons/profile.svg"
          alt="logo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BottomNavbar;
