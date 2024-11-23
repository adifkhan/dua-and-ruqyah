import Database from "better-sqlite3";
import { NextResponse } from "next/server";
import path from "path";

export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const cat_id = searchParams.get("cat_id");

    const dbPath = path.join(process.cwd(), "public", "db", "dua_main.sqlite");

    const db = new Database(dbPath, { readonly: true });

    const query = "SELECT * FROM sub_category WHERE cat_id = ?";
    const data = db.prepare(query).all(cat_id);

    db.close();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
