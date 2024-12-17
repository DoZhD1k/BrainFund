import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    // Получаем последние 5 кампаний
    const [rows] = await pool.query(`
      SELECT id, title, goal, current_raised 
      FROM campaigns 
      ORDER BY id DESC 
      LIMIT 5
    `);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("recent-campaigns error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
