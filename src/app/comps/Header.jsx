import Image from "next/image";
import React from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import SettingsDrawer from "./SettingsDrawer";
import { MdArrowBackIos } from "react-icons/md";

const Header = () => {
  return (
    <div className="flex items-center gap-7 p-5 pb-1 min-[1280px]:p-0">
      <div className="flex-1 flex items-center justify-between">
        <div className="flex min-[768px]:hidden min-[1280px]:flex items-center gap-2">
          <MdArrowBackIos size={24} className="min-[768px]:hidden" />
          <h2 className="text-lg min-[1280px]:text-2xl font-medium min-[1280px]:font-semibold whitespace-nowrap">
            Dua Page
          </h2>
        </div>
        <div className="hidden min-[768px]:flex min-[1280px]:hidden items-center gap-2 cursor-pointer">
          <Image src="/images/ird-logo.png" alt="logo" width={45} height={45} />
          <h2 className="text-xl font-medium whitespace-nowrap">Dua & Ruqyah</h2>
        </div>
        <div className="hidden min-[768px]:flex relative">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="input input-bordered w-full max-w-sm py-3 pl-3 pr-20 rounded-md bg-white focus:border-[var(--accent)] focus:outline-none focus:ring-0"
          />
          <span className="absolute top-1/2 -translate-y-1/2 right-1 px-5 py-3 bg-[var(--background)] rounded-md cursor-pointer">
            <Image src="/icons/search.png" alt="search" width={16} height={16} />
          </span>
        </div>
      </div>
      <div className="flex flex-row-reverse min-[1280px]:flex-row items-center justify-end gap-5 min-[1280px]:w-[200px] min-[1640px]:w-[270px] min-[1920px]:w-[300px]">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="hidden min-[768px]:flex items-center gap-1">
            <span className="">
              <Image src="/icons/user.png" alt="user" width={45} height={45} className="z-[1]" />
            </span>
            <span>
              <TiArrowSortedDown size={20} />
            </span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content top-[50px] menu bg-white rounded-box z-[1] w-72 p-2 shadow"
          >
            <li>
              <div>
                <Image src="/icons/support.svg" alt="search" width={16} height={16} />
                <a>Support Us</a>
              </div>
            </li>
            <li>
              <div>
                <Image src="/icons/download.svg" alt="search" width={16} height={16} />
                <a>Download Dua App</a>
              </div>
            </li>
            <li>
              <div>
                <Image src="/icons/privacy.svg" alt="search" width={16} height={16} />
                <a>Privacy Policy</a>
              </div>
            </li>
            <li>
              <div>
                <Image src="/icons/credit.svg" alt="search" width={16} height={16} />
                <a>Thanks & Credits</a>
              </div>
            </li>
            <li>
              <div>
                <Image src="/icons/about.svg" alt="search" width={16} height={16} />
                <a>About Us</a>
              </div>
            </li>
            <li>
              <div>
                <Image src="/icons/copyright.svg" alt="search" width={16} height={16} />
                <a>Copywrite Warning</a>
              </div>
            </li>
            <li>
              <div>
                <Image src="/icons/projects.svg" alt="search" width={16} height={16} />
                <a>Our Other Projects</a>
              </div>
            </li>
          </ul>
        </div>
        <SettingsDrawer />
      </div>
    </div>
  );
};

export default Header;
