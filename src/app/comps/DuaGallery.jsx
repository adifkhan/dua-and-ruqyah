import React from "react";
import Dua from "./Dua";

const DuaGallery = ({ subcat }) => {
  return (
    <div>
      <div className="bg-white font-medium p-4 rounded-xl">
        <p>
          <span className="text-[var(--accent)]">Section: </span> {subcat?.subcat_name_en}
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {subcat?.duas?.map((dua, i) => (
          <Dua key={i} dua={dua} />
        ))}
      </div>
    </div>
  );
};

export default DuaGallery;
