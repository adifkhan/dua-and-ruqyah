import Database from "better-sqlite3";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const cat_id = searchParams.get("cat_id");

    const db = new Database("./db/dua_main.sqlite", { readonly: true });

    const query = "SELECT * FROM sub_category WHERE cat_id = ?";
    const data = db.prepare(query).all(cat_id);

    db.close();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
