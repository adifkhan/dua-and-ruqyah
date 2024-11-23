import Database from "better-sqlite3";
import { NextResponse } from "next/server";
export async function GET(req, res) {
  try {
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.searchParams);
    const subcat_id = searchParams.get("subcat_id");

    const db = new Database("./db/dua_main.sqlite", { readonly: true });

    const query = "SELECT * FROM dua WHERE subcat_id = ?";
    const data = db.prepare(query).all(subcat_id);

    db.close();

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
