import CategoryDrawer from "@/app/comps/CategoryDrawer";
import DuaGallery from "@/app/comps/DuaGallery";
import { fetchCategories, fetchCategoryWiseData } from "@/app/utils/myFunc";

export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories?.map((category) => ({ cat_name: category.cat_name_en }));
}

export default async function Page({ params, searchParams }) {
  const { cat_name } = await params;
  const { cat, subcat, dua } = await searchParams;

  const categoryData = await fetchCategoryWiseData(cat);
  return (
    <div className="flex flex-col gap-5 px-3">
      <div className="flex min-[1140px]:hidden items-center gap-3  bg-white font-medium p-4 rounded-xl">
        <CategoryDrawer />
        <p>{cat_name.split("%20").join(" ")}</p>
      </div>
      {categoryData?.length > 0 &&
        categoryData?.map((subcat, i) => <DuaGallery key={i} subcat={subcat} />)}
    </div>
  );
}
