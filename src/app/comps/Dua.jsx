"use client";

import Image from "next/image";
import React from "react";

const Dua = ({ dua }) => {
  const [isPlay, setIsPlay] = React.useState();

  return (
    <div className="flex flex-col gap-7 bg-white font-medium p-5 rounded-xl">
      <div className="flex items-center gap-3">
        <Image src="/icons/allah.png" alt="Allah" width={35} height={35} />
        <h4 className="text-[var(--accent)]">
          {dua?.dua_id}. {dua?.dua_name_en}
        </h4>
      </div>
      <div>
        <p className="text-justify text-black leading-8">{dua?.top_en}</p>
      </div>
      {dua?.dua_arabic && (
        <div>
          <p className="text-right text-black text-2xl leading-10">{dua.dua_arabic}</p>
        </div>
      )}
      {dua?.transliteration_en && (
        <div>
          <em className="text-justify text-black leading-8">
            <span className="font-semibold">Transliteration: </span> {dua.transliteration_en}
          </em>
        </div>
      )}
      {dua?.translation_en && (
        <div>
          <p className="text-justify leading-8">
            <span className="font-semibold">Translation: </span> {dua.translation_en}
          </p>
        </div>
      )}
      <div>
        <p className="text-[var(--accent)]">Reference:</p>
        <p className="text-justify text-black">{dua.refference_en}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          {dua?.audio && (
            <div className="py-4 flex flex-row items-center xs:w-full xs:gap-x-4">
              <audio id="audio" src={dua.audio} preload="auto"></audio>
              <div className="flex flex-row items-center gap-x-3 xs:w-full">
                <Image
                  src={isPlay ? "/icons/pause.svg" : "/icons/play.png"}
                  alt="play/pase"
                  width={44}
                  height={44}
                  className="cursor-pointer xs:w-8"
                  onClick={() => setIsPlay(!isPlay)}
                />

                <input
                  className={`w-full h-2 appearance-none rounded-full bg-green-200
             focus:outline-none accent-green-500 hover:accent-green-600 cursor-pointer ${
               isPlay ? "block" : "hidden"
             }`}
                  type="range"
                  name=""
                  id=""
                  min={0}
                  defaultValue={0}
                />
              </div>
              <div className={`w-20 justify-center px-3 ${isPlay ? "flex" : "hidden"}`}>
                <p className="ml-2 text-mute-grey-200 text-sm dark:text-dark-text">{"00:00"}</p>
              </div>
              <div className={`w-20 justify-center ${isPlay ? "flex" : "hidden"}`}>
                <Image
                  src="/icons/suffle.svg"
                  alt="pause"
                  width={30}
                  height={30}
                  className="cursor-pointer w-8  opacity-60"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-8">
          <Image src="/icons/copy.png" alt="copy" width={18} height={18} />
          <Image src="/icons/bookmark.png" alt="bookmark" width={18} height={18} />
          <Image src="/icons/memorize.png" alt="memorize" width={18} height={18} />
          <Image src="/icons/share.png" alt="share" width={18} height={18} />
          <Image src="/icons/report.png" alt="report" width={18} height={18} />
        </div>
      </div>
    </div>
  );
};

export default Dua;
