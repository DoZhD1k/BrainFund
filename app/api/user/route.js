import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "SUPERSECRETKEY";

export async function PATCH(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = jwt.verify(token, SECRET);
    const userId = decoded.userId;

    const { name, password } = await request.json();
    if (!name) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 }
      );
    }

    // Обновление в БД
    let query = "UPDATE users SET name = ?";
    let params = [name];

    // Если password передан, хэшируем и добавляем в UPDATE
    if (password && password.trim().length > 0) {
      const hashed = await bcrypt.hash(password, 10);
      query += ", password_hash = ?";
      params.push(hashed);
    }

    query += " WHERE id = ?";
    params.push(userId);

    const [result] = await pool.execute(query, params);

    return NextResponse.json({ message: "Profile updated" });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
