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

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain } from "lucide-react";
import { Home, ChartBarStacked, CirclePlus } from "lucide-react";

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
      title: "Create Campaing",
      url: "/create-campaing",
      icon: CirclePlus,
    },
  ],
};

export function AppSidebar() {
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
                  {/* <span>v1.0.0</span> */}
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
                  <Link href={item.url} className="font-medium">
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
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
