// // middleware.js
// import { NextResponse } from "next/server";
// import jwt from "jsonwebtoken";

// const SECRET = process.env.JWT_SECRET || "SUPERSECRETKEY";

// // Определяем защищённые маршруты, требующие admin-роль
// const ADMIN_PATHS = ["/admin"];

// export async function middleware(request) {
//   const { pathname } = request.nextUrl;

//   // Проверяем, относится ли маршрут к /admin
//   if (ADMIN_PATHS.some((path) => pathname.startsWith(path))) {
//     const token = request.cookies.get("token")?.value;

//     console.log("[MIDDLEWARE] Requested:", pathname);
//     console.log("[MIDDLEWARE] Token from cookie:", token);

//     if (!token) {
//       console.log("[MIDDLEWARE] Нет куки 'token' → редирект /login");
//       return NextResponse.redirect(new URL("/login", request.url));
//     }

//     try {
//       const decoded = jwt.verify(token, SECRET);
//       console.log("[MIDDLEWARE] Decoded JWT:", decoded);

//       // Проверяем роль
//       if (decoded.role !== "admin") {
//         console.log("[MIDDLEWARE] Пользователь не admin → редирект /");
//         return NextResponse.redirect(new URL("/", request.url));
//       }
//     } catch (err) {
//       console.log("[MIDDLEWARE] Ошибка в jwt.verify:", err.message);
//       return NextResponse.redirect(new URL("/login", request.url));
//     }
//   }

//   console.log("[MIDDLEWARE] Пропускаем далее:", pathname);
//   return NextResponse.next();
// }

// // Настраиваем middleware на /admin/**
// export const config = {
//   matcher: ["/admin/:path*"],
// };

export const runtime = "edge";

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = process.env.JWT_SECRET;

const ADMIN_PATHS = ["/admin"];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  if (ADMIN_PATHS.some((path) => pathname.startsWith(path))) {
    const token = request.cookies.get("token")?.value;
    console.log("[MIDDLEWARE] Requested:", pathname);
    console.log("[MIDDLEWARE] Token from cookie:", token);

    if (!token) {
      console.log("[MIDDLEWARE] Нет куки 'token' → редирект /login");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const encoder = new TextEncoder();
      const secretKey = encoder.encode(SECRET);

      const { payload } = await jwtVerify(token, secretKey);

      console.log("[MIDDLEWARE] Decoded JWT:", payload);

      if (payload.role !== "admin") {
        console.log("[MIDDLEWARE] Не админ → редирект /");
        return NextResponse.redirect(new URL("/", request.url));
      }
    } catch (err) {
      console.log("[MIDDLEWARE] Ошибка в jwtVerify:", err.message);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
