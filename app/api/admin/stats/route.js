// import { NextResponse } from "next/server";
// import db from "@/lib/db"; // ваш db клиент, например Prisma или mysql2

// export async function GET() {
//   // Предположим, что используем Prisma:
//   const userCount = await db.user.count();
//   const campaignCount = await db.campaign.count();
//   // Подсчитываем totalRaised по всем кампаниям
//   // Либо через pledges, либо sum current_raised из campaigns
//   const result = await db.campaign.aggregate({
//     _sum: { current_raised: true },
//   });
//   const totalRaised = result._sum.current_raised || 0;

//   return NextResponse.json({
//     userCount,
//     campaignCount,
//     totalRaised,
//   });
// }

// app/api/admin/stats/route.js
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    // Количество пользователей
    const [userCountRows] = await pool.query(
      "SELECT COUNT(*) AS cnt FROM users"
    );
    const userCount = userCountRows[0].cnt;

    // Количество кампаний
    const [campaignCountRows] = await pool.query(
      "SELECT COUNT(*) AS cnt FROM projects"
    );
    const campaignCount = campaignCountRows[0].cnt;

    // Сумма current_raised
    const [sumRows] = await pool.query(
      "SELECT SUM(current_raised) AS totalRaised FROM projects"
    );
    const totalRaised = sumRows[0].totalRaised || 0;

    // Можно посчитать «активные» кампании, если есть логика deadline
    const [activeRows] = await pool.query(
      "SELECT COUNT(*) AS cnt FROM projects WHERE deadline >= CURDATE()"
    );
    const activeCampaigns = activeRows[0].cnt;

    return NextResponse.json({
      totalUsers: userCount,
      totalCampaigns: campaignCount,
      totalRaised,
      activeCampaigns,
    });
  } catch (err) {
    console.error("Stats error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
