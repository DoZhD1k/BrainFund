import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    // Получаем последних 5 пользователей
    const [rows] = await pool.query(`
      SELECT id, name, email, role 
      FROM users 
      ORDER BY id DESC 
      LIMIT 5
    `);
    return NextResponse.json(rows);
  } catch (err) {
    console.error("recent-users error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
