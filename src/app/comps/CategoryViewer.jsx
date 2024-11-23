"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import SubCatViewer from "./SubCatViewer";

const CategoryViewer = ({ category }) => {
  const router = useRouter();

  const { selectedCategory, setSelectedCategory } = useContext(GlobalContext);
  const [categoryData, setCategoryData] = React.useState([]);

  React.useEffect(() => {
    try {
      fetch(`/api/categories?cat_id=${selectedCategory}`)
        .then((res) => res.json())
        .then((data) => setCategoryData(data));
    } catch (error) {
      console.log(error);
    }
  }, [selectedCategory]);

  return (
    <>
      <div
        className={`flex items-center justify-between gap-3 p-3 cursor-pointer rounded-2xl ${
          selectedCategory === category.cat_id ? "bg-[var(--background)]" : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedCategory(category.cat_id);
          router.push(`/duas/${category.cat_name_en}?cat=${category.cat_id}`);
        }}
      >
        <div className="flex items-center justify-center w-14 h-14 bg-[var(--background)] rounded-xl">
          <Image src="/icons/category.png" alt="category_icon" width={40} height={40} />
        </div>
        <div className="flex-1 ">
          <p className="font-semibold">{category.cat_name_en}</p>
          <p className="text-sm text-[var(--neutral)]">Subcategory : {category.no_of_subcat}</p>
        </div>
        <div>
          <p className="text-center font-semibold">{category.no_of_dua}</p>
          <p className="text-center text-sm text-[var(--neutral)]">Duas</p>
        </div>
      </div>
      <div className={`py-2 pr-2 pl-5 ${selectedCategory === category.cat_id ? "flex" : "hidden"}`}>
        <div className="flex flex-col gap-3 border-l-2 border-dotted border-[var(--accent)]">
          {categoryData?.map((cat, i) => (
            <SubCatViewer key={i} data={cat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryViewer;
