// app/api/admin/users/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  const [rows] = await pool.query(
    "SELECT id, name, email, role, created_at, updated_at FROM users"
  );
  return NextResponse.json(rows);
}

export async function DELETE(request) {
  // ...какой-то код удаления
}
// и т.д.
