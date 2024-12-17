// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// const SECRET = process.env.JWT_SECRET || "SUPERSECRETKEY";

// export async function GET(request) {
//   try {
//     const token = request.cookies.get("token")?.value;
//     if (!token) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }
//     const decoded = jwt.verify(token, SECRET);
//     return NextResponse.json({ userId: decoded.userId, role: decoded.role });
//   } catch (error) {
//     return NextResponse.json({ message: "Invalid token" }, { status: 401 });
//   }
// }

import { NextResponse } from "next/server";
import pool from "@/lib/db";
import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "SUPERSECRETKEY";

export async function GET(request) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const decoded = jwt.verify(token, SECRET);
    const userId = decoded.userId;

    // Делаем запрос в БД, чтобы взять реальные поля (name, email, role)
    const [rows] = await pool.query(
      "SELECT id, name, email, role FROM users WHERE id = ?",
      [userId]
    );
    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    const user = rows[0];

    // Возвращаем нужные поля
    return NextResponse.json({
      userId: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("GET /api/auth/me error:", error);
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }
}
