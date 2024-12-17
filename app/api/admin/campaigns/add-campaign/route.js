import pool from "@/lib/db";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description } = body;

    // Простая валидация
    if (!name || !description) {
      return new Response(
        JSON.stringify({ message: "Все поля обязательны." }),
        { status: 400 }
      );
    }

    // Вставка новой кампании в БД
    const [result] = await pool.execute(
      "INSERT INTO campaigns (name, description, created_at, updated_at) VALUES (?, ?, NOW(), NOW())",
      [name, description]
    );

    return new Response(
      JSON.stringify({
        message: "Кампания успешно добавлена.",
        campaignId: result.insertId,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка при добавлении кампании:", error);
    return new Response(
      JSON.stringify({ message: "Внутренняя ошибка сервера." }),
      { status: 500 }
    );
  }
}
