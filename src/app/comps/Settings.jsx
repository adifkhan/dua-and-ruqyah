"use client";

import Image from "next/image";
import React from "react";
import { MdArrowBackIos } from "react-icons/md";

const Settings = () => {
  const [activeSetting, setActiveSetting] = React.useState("language");
  return (
    <div className="settings_wrapper flex flex-col w-[100%] min-[480px]:w-[335px] min-[1640px]:w-[270px] min-[1920px]:w-[300px] bg-white px-3 py-5 min-[480px]:rounded-s-3xl min-[1640px]:rounded-3xl">
      <div className="flex items-center gap-2 min-[480px]:justify-center">
        <label htmlFor="setting_drawer" className="min-[480px]:hidden">
          <MdArrowBackIos size={24} />
        </label>
        <h4 className="text-xl font-semibold min-[480px]:text-center">Settings</h4>
      </div>
      <div className="flex-1 mt-8 flex flex-col gap-4 overflow-y-scroll">
        <div
          className={`border rounded-lg ${
            activeSetting === "language" ? "" : "border-transparent"
          }`}
          onClick={() => setActiveSetting("language")}
        >
          <div
            className={`flex items-center gap-2 p-2 bg-[#F7F8FA] font-medium rounded-lg cursor-pointer relative ${
              activeSetting === "language"
                ? "setting_cat text-[var(--accent)]"
                : "text-[var(--neutral)]"
            }`}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]">
              <Image src="/icons/language.png" alt="language" width={20} height={20} />
            </span>
            <p>Language Settings</p>
          </div>
          <div
            className={`${activeSetting === "language" ? "flex" : "hidden"} justify-around py-5`}
          >
            <button className="w-24 py-3 border rounded-lg text-sm bg-[var(--accent)] text-white cursor-pointer">
              English
            </button>
            <button className="w-24 py-3 border rounded-lg text-sm  cursor-pointer">বাংলা</button>
          </div>
        </div>
        <div
          className={`border rounded-lg ${activeSetting === "general" ? "" : "border-transparent"}`}
          onClick={() => setActiveSetting("general")}
        >
          <div
            className={`flex items-center gap-2 p-2 bg-[#F7F8FA] font-medium rounded-lg cursor-pointer relative ${
              activeSetting === "general"
                ? "setting_cat text-[var(--accent)]"
                : "text-[var(--neutral)]"
            }`}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]">
              <Image src="/icons/general.png" alt="general" width={20} height={20} />
            </span>
            <p>General Settings</p>
          </div>
          <div className={`${activeSetting === "general" ? "flex" : "hidden"} flex-col gap-2 p-5`}>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Arabic</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Translation</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Transliteration</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Reference</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className={`border rounded-lg ${activeSetting === "font" ? "" : "border-transparent"}`}
          onClick={() => setActiveSetting("font")}
        >
          <div
            className={`flex items-center gap-2 p-2 bg-[#F7F8FA] font-medium rounded-lg cursor-pointer relative ${
              activeSetting === "font"
                ? "setting_cat text-[var(--accent)]"
                : "text-[var(--neutral)]"
            }`}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]">
              <Image src="/icons/menu.png" alt="font" width={20} height={20} />
            </span>
            <p>Font Settings</p>
          </div>
          <div className={`${activeSetting === "font" ? "flex" : "hidden"} flex-col gap-2 p-5`}>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Arabic</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Translation</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Transliteration</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Reference</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
          </div>
        </div>
        <div
          className={`border rounded-lg ${
            activeSetting === "appearance" ? "" : "border-transparent"
          }`}
          onClick={() => setActiveSetting("appearance")}
        >
          <div
            className={`flex items-center gap-2 p-2 bg-[#F7F8FA] font-medium rounded-lg cursor-pointer relative ${
              activeSetting === "appearance"
                ? "setting_cat text-[var(--accent)]"
                : "text-[var(--neutral)]"
            }`}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--background)]">
              <Image src="/icons/menu.png" alt="appearance" width={20} height={20} />
            </span>
            <p>Appearance Settings</p>
          </div>
          <div
            className={`${activeSetting === "appearance" ? "flex" : "hidden"} flex-col gap-2 p-5`}
          >
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Arabic</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Translation</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Transliteration</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer label">
                <span className="label-text text-[var(--foreground)]">Show Reference</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-[var(--neutral)] [--chkbg:var(--accent)] [--chkfg:white] checked:[var(--neutral)] checkbox-sm"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
