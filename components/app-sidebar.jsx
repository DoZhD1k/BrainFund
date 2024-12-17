// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuAction,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Brain } from "lucide-react";
// import { Home, ChartBarStacked, CirclePlus } from "lucide-react";

// const data = {
//   navMain: [
//     {
//       title: "Home",
//       url: "/",
//       icon: Home,
//     },
//     {
//       title: "Categories",
//       url: "/categories",
//       icon: ChartBarStacked,
//     },
//     {
//       title: "Create Campaign",
//       url: "/create-campaign",
//       icon: CirclePlus,
//     },
//   ],
// };

// export function AppSidebar() {
//   return (
//     <Sidebar variant="inset" collapsible="icon">
//       <SidebarHeader>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton size="lg" asChild>
//               <Link href="/">
//                 <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//                   <Brain size={24} />
//                 </div>
//                 <div className="flex flex-col gap-0.5 leading-none">
//                   <span className="font-semibold">BrainFund</span>
//                 </div>
//               </Link>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarMenu>
//             {data.navMain.map((item) => (
//               <SidebarMenuItem key={item.title}>
//                 <SidebarMenuButton asChild>
//                   <Link href={item.url} className="font-medium">
//                     <item.icon />
//                     <span>{item.title}</span>
//                   </Link>
//                 </SidebarMenuButton>
//                 {item.showAction && (
//                   <SidebarMenuAction onClick={item.action}>
//                     <Plus />
//                   </SidebarMenuAction>
//                 )}
//               </SidebarMenuItem>
//             ))}
//           </SidebarMenu>
//         </SidebarGroup>
//       </SidebarContent>
//     </Sidebar>
//   );
// }

"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogoutButton } from "./custom/LogoutButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Brain,
  Home,
  ChartBarStacked,
  CirclePlus,
  ShieldCheck,
  User,
} from "lucide-react";
import { Plus } from "lucide-react";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Categories",
      url: "/categories",
      icon: ChartBarStacked,
    },
    {
      title: "Create Campaign",
      url: "/create-campaign",
      icon: CirclePlus,
    },
    // Список основных ссылок. Admin добавим динамически ниже
  ],
};

export function AppSidebar() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Попробуем получить данные текущего пользователя
    // Если не авторизован, /api/auth/me вернёт ошибку или { message: "Unauthorized" }
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Not logged in");
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((err) => {
        console.log("User is not logged in or error:", err.message);
      });
  }, []);

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Brain size={24} />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">BrainFund</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <Link
                    href={item.url}
                    className="font-medium flex items-center gap-2"
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
                {item.showAction && (
                  <SidebarMenuAction onClick={item.action}>
                    <Plus />
                  </SidebarMenuAction>
                )}
              </SidebarMenuItem>
            ))}

            {/* Если пользователь админ, добавляем пункт "Admin Panel" */}
            {user && user.role === "admin" && (
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    href="/admin"
                    className="font-medium flex items-center gap-2"
                  >
                    <ShieldCheck />
                    <span>Admin Panel</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Футер сайдбара: показываем данные о пользователе (если залогинен) */}
      <SidebarFooter className="p-4 border-t border-muted">
        {user ? (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-accent text-accent-foreground">
                <User size={20} />
              </div>
              <Link href="/profile" className="font-semibold hover:underline">
                {user.name}
              </Link>
            </div>
            <LogoutButton />
          </div>
        ) : (
          <Link href="/login" className="text-sm font-medium hover:underline">
            Login
          </Link>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
