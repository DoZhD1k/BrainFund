import pool from "@/lib/db";

export async function GET() {
  try {
    const [subcategories] = await pool.query(`
      SELECT 
        s.id, 
        s.name, 
        s.description, 
        s.category_id, 
        s.created_at, 
        s.updated_at, 
        c.name AS category_name
      FROM subcategories s
      LEFT JOIN categories c ON s.category_id = c.id
    `);

    return new Response(JSON.stringify(subcategories), { status: 200 });
  } catch (error) {
    console.error("Ошибка при получении подкатегорий:", error);
    return new Response(JSON.stringify({ message: "Ошибка сервера" }), {
      status: 500,
    });
  }
}
