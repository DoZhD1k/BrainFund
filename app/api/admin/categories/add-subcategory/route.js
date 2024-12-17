import pool from "@/lib/db";

export async function POST(req) {
  try {
    const { category_id, name, description } = await req.json();

    if (!category_id || !name || !description) {
      return new Response(
        JSON.stringify({ message: "Название и категория обязательны." }),
        { status: 400 }
      );
    }

    await pool.execute(
      "INSERT INTO subcategories (category_id,name, description, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())",
      [category_id, name, description]
    );

    return new Response(
      JSON.stringify({ message: "Подкатегория успешно добавлена." }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка при добавлении подкатегории:", error);
    return new Response(JSON.stringify({ message: "Ошибка сервера" }), {
      status: 500,
    });
  }
}
