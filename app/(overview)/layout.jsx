"use client";

import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { NavBar } from "@/components/custom";
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <NavBar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
