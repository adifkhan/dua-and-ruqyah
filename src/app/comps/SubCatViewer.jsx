"use client";

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SubCatViewer = ({ data }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { selectedSubCat, setSelectedSubCat, selectedDua, setSelectedDua } =
    useContext(GlobalContext);
  const [subcatData, setSubcatData] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch(`/api/subcategory?subcat_id=${selectedSubCat}`)
        .then((res) => res.json())
        .then((data) => setSubcatData(data));
    } catch (error) {
      console.log(error);
    }
  }, [selectedSubCat]);

  const handleAddQuery = (queryName, queryValue) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set(queryName, queryValue);
    router.push(`${pathname}?${currentParams.toString()}`);
  };

  return (
    <>
      <div
        className="sub_cat_box pl-3 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedSubCat(data.subcat_id);
          handleAddQuery("subcat", data.subcat_id);
        }}
      >
        <h4
          className={`text-sm font-medium ${
            selectedSubCat === data.subcat_id && "text-[var(--accent)]"
          }`}
        >
          {data.subcat_name_en}
        </h4>
      </div>
      <div
        className={`flex-col gap-3 py-2 pr-2 pl-5 ${
          selectedSubCat === data.subcat_id ? "flex" : "hidden"
        }`}
      >
        {subcatData?.map((subcat, i) => (
          <div
            key={i}
            className="flex gap-3 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedDua(subcat.dua_id);
              handleAddQuery("dua", subcat.dua_id);
            }}
          >
            <Image src="/icons/duaarrow.svg" alt="downarrow" width={15} height={15} />
            <p
              className={`text-sm font-medium ${
                selectedDua === subcat.dua_id && "text-[var(--accent)]"
              }`}
            >
              {subcat?.dua_name_en}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SubCatViewer;
