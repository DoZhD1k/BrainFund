// import pool from "@/lib/db";

// export async function GET() {
//   try {
//     const [categories] = await pool.query(`
//       SELECT id, name, description, created_at, updated_at FROM categories`);

//     return new Response(JSON.stringify(categories), { status: 200 });
//   } catch (error) {
//     console.error("Ошибка при получении подкатегорий:", error);
//     return new Response(JSON.stringify({ message: "Ошибка сервера" }), {
//       status: 500,
//     });
//   }
// }

import pool from "@/lib/db";

export async function GET() {
  try {
    const [categories] = await pool.query(`
      SELECT 
        id, 
        name, 
        description, 
        project_count, 
        created_at, 
        updated_at 
      FROM categories
    `);

    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    console.error("Ошибка при получении категорий:", error);
    return new Response(JSON.stringify({ message: "Ошибка сервера" }), {
      status: 500,
    });
  }
}
