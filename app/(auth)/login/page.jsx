// "use client";

// import React, { useState } from "react";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       if (!res.ok) {
//         const { message } = await res.json();
//         throw new Error(message);
//       }
//       // Логин успешен, редиректим на /admin или другую страницу
//       window.location.href = "/admin";
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="container mx-auto max-w-sm mt-10">
//       <h1 className="text-2xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleLogin} className="space-y-4">
//         <div>
//           <label className="block mb-1">Email</label>
//           <input
//             className="border w-full p-2"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label className="block mb-1">Password</label>
//           <input
//             className="border w-full p-2"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         <button
//           className="bg-blue-600 text-white py-2 px-4 rounded"
//           type="submit"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    // Шаг 1: Предотвращаем дефолтное поведение формы
    e.preventDefault();
    console.log("[DEBUG] handleLogin called, form submission prevented");

    // Обнуляем состояние ошибки
    setError("");

    try {
      console.log("[DEBUG] Sending fetch request to /api/auth/login:");
      console.log("    email:", email);
      console.log("    password:", password);

      // Шаг 2: Отправляем POST-запрос
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      console.log("[DEBUG] Fetch response status:", res.status);

      // Шаг 3: Проверяем, не вернулась ли ошибка
      if (!res.ok) {
        const { message } = await res.json();
        console.log("[DEBUG] Error response body:", message);
        throw new Error(message);
      }

      // Шаг 4: Если всё OK, значит логин успешен
      const data = await res.json();
      console.log("[DEBUG] Success response body:", data);
      console.log("[DEBUG] Setting window.location.href to /admin");

      window.location.href = "/profile";
    } catch (err) {
      console.log("[DEBUG] Caught an error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto max-w-sm mt-10">
      <h1 className="text-2xl font-bold mb-4">Login (Debug Version)</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1">Email</label>
          <input
            className="border w-full p-2"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("[DEBUG] Email changed:", e.target.value);
            }}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Password</label>
          <input
            className="border w-full p-2"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log("[DEBUG] Password changed:", e.target.value);
            }}
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded"
          type="submit"
          onClick={() => console.log("[DEBUG] Submit button clicked")}
        >
          Login
        </button>
      </form>
    </div>
  );
}
