import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="hidden min-[1280px]:flex flex-col items-center justify-between gap-16 w-[105px] py-8 rounded-3xl bg-white overflow-y-scroll"
      style={{ height: "calc(100vh - 48px)" }}
    >
      <div className="cursor-pointer">
        <Image src="/images/ird-logo.png" alt="logo" width={65} height={65} />
      </div>
      <div className="flex flex-col gap-7">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)] cursor-pointer hover:scale-105	duration-100">
          <Image src="/icons/home.png" alt="logo" width={17} height={17} />
        </span>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)] cursor-pointer hover:scale-105	duration-100">
          <Image src="/icons/menu.png" alt="logo" width={17} height={17} />
        </span>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)] cursor-pointer hover:scale-105	duration-100">
          <Image src="/icons/memorize.png" alt="logo" width={17} height={17} />
        </span>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)] cursor-pointer hover:scale-105	duration-100">
          <Image src="/icons/bookmark.png" alt="logo" width={17} height={17} />
        </span>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)] cursor-pointer hover:scale-105	duration-100">
          <Image src="/icons/ruqyah.png" alt="logo" width={17} height={17} />
        </span>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)] cursor-pointer hover:scale-105	duration-100">
          <Image src="/icons/books.png" alt="logo" width={17} height={17} />
        </span>
      </div>
      <div className="cursor-pointer">
        <Image src="/images/support.png" alt="support" width={65} height={65} />
      </div>
    </div>
  );
};

export default Navbar;
