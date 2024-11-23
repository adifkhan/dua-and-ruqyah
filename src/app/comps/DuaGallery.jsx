"use client";

import React, { useContext } from "react";
import Dua from "./Dua";
import { GlobalContext } from "../context/GlobalProvider";

const DuaGallery = ({ subcategory, cat_id, subcat_id, dua_id }) => {
  const { setSelectedCategory, setSelectedSubCat, setSelectedDua } = useContext(GlobalContext);

  React.useEffect(() => {
    setSelectedCategory(parseInt(cat_id));
    setSelectedSubCat(parseInt(subcat_id));
    setSelectedDua(parseInt(dua_id));
  }, [cat_id, dua_id, subcat_id]);

  React.useEffect(() => {
    const subcat_elem = document.getElementById(`subcat_${subcat_id}`);
    const page_scroller = document.getElementById(`page_scroller`);

    if (subcat_elem && page_scroller) {
      page_scroller.scrollTo({
        top: subcat_elem.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [subcat_id]);

  React.useEffect(() => {
    const dua_elem = document.getElementById(`dua_${dua_id}`);
    const page_scroller = document.getElementById(`page_scroller`);

    if (dua_elem && page_scroller) {
      page_scroller.scrollTo({
        top: dua_elem.offsetTop - 100,
        behavior: "smooth",
      });
    }
  }, [dua_id]);

  return (
    <div>
      <div id={"subcat_" + subcategory?.subcat_id} className="bg-white font-medium p-4 rounded-xl">
        <p>
          <span className="text-[var(--accent)]">Section: </span> {subcategory?.subcat_name_en}
        </p>
      </div>
      <div className="flex flex-col gap-5 mt-5">
        {subcategory?.duas?.map((dua, i) => (
          <Dua key={i} dua={dua} />
        ))}
      </div>
    </div>
  );
};

export default DuaGallery;
