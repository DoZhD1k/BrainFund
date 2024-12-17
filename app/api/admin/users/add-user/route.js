import pool from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    if (!name || !email || !password || !role) {
      return new Response(
        JSON.stringify({ message: "Все поля обязательны." }),
        { status: 400 }
      );
    }

    // Проверка существующего пользователя
    const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length > 0) {
      return new Response(
        JSON.stringify({ message: "Email уже существует." }),
        { status: 400 }
      );
    }

    // Хэширование пароля
    const passwordHash = await bcrypt.hash(password, 10);

    // Добавление пользователя
    await pool.execute(
      "INSERT INTO users (name, email, password_hash, role, created_at, updated_at) VALUES (?, ?, ?, ?, NOW(), NOW())",
      [name, email, passwordHash, role]
    );

    return new Response(
      JSON.stringify({ message: "Пользователь успешно добавлен." }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Ошибка при добавлении пользователя:", error);
    return new Response(
      JSON.stringify({ message: "Внутренняя ошибка сервера." }),
      { status: 500 }
    );
  }
}
