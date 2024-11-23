import Database from "better-sqlite3";

export async function fetchCategories() {
  const db = new Database("./db/dua_main.sqlite", { readonly: true });

  try {
    const query = "SELECT * FROM category";
    const categories = db.prepare(query).all();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  } finally {
    db.close();
  }
}

export async function fetchCategoryWiseData(cat_id) {
  const db = new Database("./db/dua_main.sqlite", { readonly: true });

  try {
    const subCategories = db.prepare(`SELECT * FROM sub_category WHERE cat_id = ?`).all(cat_id);

    const duas = db.prepare(`SELECT * FROM dua WHERE cat_id = ?`).all(cat_id);

    // Group duas by subcat_id
    const duasGroupedBySubcat = duas.reduce((acc, dua) => {
      acc[dua.subcat_id] = acc[dua.subcat_id] || [];
      acc[dua.subcat_id].push(dua);
      return acc;
    }, {});

    const subCategoriesWithDuas = subCategories.map((subcat) => ({
      ...subcat,
      duas: duasGroupedBySubcat[subcat.subcat_id] || [],
    }));

    return subCategoriesWithDuas;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  } finally {
    db.close();
  }
}
