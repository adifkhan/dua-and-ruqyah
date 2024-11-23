import Image from "next/image";
import CategoryViewer from "./CategoryViewer";
import { fetchCategories } from "../utils/myFunc";
import { RxCross1 } from "react-icons/rx";

export default async function Categories() {
  const categories = await fetchCategories();

  return (
    <div className="category_wrapper flex flex-col w-full min-[640px]:w-[60%] min-[768px]:w-[45%] min-[1140px]:w-[350px] bg-white min-[1140px]:rounded-3xl overflow-hidden">
      <div className="flex items-center justify-between bg-[var(--accent)] text-white p-4">
        <p className="text-lg font-semibold text-center ">Categories</p>
        <label htmlFor="category_drawer" className="min-[1140px]:hidden">
          <RxCross1 size={24} />
        </label>
      </div>
      <div className="hidden min-[1140px]:block relative p-3">
        <span className="absolute top-1/2 -translate-y-1/2 left-4 p-3  rounded-md cursor-pointer">
          <Image src="/icons/search.png" alt="search" width={16} height={16} />
        </span>
        <input
          type="text"
          placeholder="Search Categories"
          className="input input-bordered w-full py-3 pl-12 pr-3 rounded-md bg-white focus:border-[var(--accent)] focus:outline-none focus:ring-0"
        />
      </div>
      <div className="flex-1 px-3 pt-3 pb-16 overflow-y-scroll">
        {categories?.length > 0 &&
          categories.map((category, i) => <CategoryViewer key={i} category={category} />)}
      </div>
    </div>
  );
}
