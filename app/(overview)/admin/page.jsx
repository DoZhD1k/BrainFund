"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, User, Banknote, FolderOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function AdminDashboard() {
  // Пример стейтов для статистики и последних элементов
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCampaigns: 0,
    totalRaised: 0,
    activeCampaigns: 0,
  });
  const [recentCampaigns, setRecentCampaigns] = useState([]);
  const [recentUsers, setRecentUsers] = useState([]);

  useEffect(() => {
    // Загрузка статистики
    fetch("/api/admin/stats")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Stats error:", err));

    // Загрузка последних кампаний
    fetch("/api/admin/campaigns/recent-campaigns")
      .then((res) => res.json())
      .then((data) => setRecentCampaigns(data))
      .catch((err) => console.error("Recent campaigns error:", err));

    // Загрузка последних пользователей
    fetch("/api/admin/users/recent-users")
      .then((res) => res.json())
      .then((data) => setRecentUsers(data))
      .catch((err) => console.error("Recent users error:", err));
  }, []);

  return (
    <div className="container sm:px-6 lg:px-8 mx-auto px-4 space-y-6">
      <div className="relative w-full overflow-hidden bg-gradient-to-tr rounded-lg from-indigo-300 via-purple-300 to-pink-300">
        <div className="container mx-auto py-16 px-6 lg:px-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md">
            Admin Panel
          </h1>
          <p className="mt-4 max-w-xl text-gray-700 text-lg">
            Manage this shit
          </p>
        </div>
      </div>

      {/* Кнопки для переходов */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <a href="/admin/users">View All Users</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/admin/categories">Manage Categories</a>
        </Button>
      </div>
      <Separator />

      {/* Карточки статистики */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          icon={<User className="h-6 w-6 text-blue-500" />}
          title="Users"
          value={stats.totalUsers}
          description="Total registered"
        />
        <StatsCard
          icon={<FolderOpen className="h-6 w-6 text-green-500" />}
          title="Campaigns"
          value={stats.totalCampaigns}
          description="All campaigns"
        />
        <StatsCard
          icon={<Banknote className="h-6 w-6 text-orange-500" />}
          title="Total Raised"
          value={`$${stats.totalRaised}`}
          description="Across all campaigns"
        />
        <StatsCard
          icon={<BarChart className="h-6 w-6 text-purple-500" />}
          title="Active"
          value={stats.activeCampaigns}
          description="Campaigns ongoing"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Блок последних кампаний */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Campaigns</CardTitle>
            <CardDescription>Last 5 added campaigns</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-64">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted text-muted-foreground">
                    <th className="py-2 px-4 text-left">Title</th>
                    <th className="py-2 px-4 text-left">Goal</th>
                    <th className="py-2 px-4 text-left">Raised</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCampaigns.length ? (
                    recentCampaigns.map((camp) => (
                      <tr
                        key={camp.id}
                        className="border-b last:border-none hover:bg-accent"
                      >
                        <td className="py-2 px-4">{camp.title}</td>
                        <td className="py-2 px-4">${camp.goal}</td>
                        <td className="py-2 px-4">${camp.current_raised}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-4 px-4 text-center" colSpan={3}>
                        No recent campaigns
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Блок последних пользователей */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Users</CardTitle>
            <CardDescription>Last 5 registered users</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-64">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted text-muted-foreground">
                    <th className="py-2 px-4 text-left">ID</th>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.length ? (
                    recentUsers.map((user) => (
                      <tr
                        key={user.id}
                        className="border-b last:border-none hover:bg-accent"
                      >
                        <td className="py-2 px-4">{user.id}</td>
                        <td className="py-2 px-4">{user.name}</td>
                        <td className="py-2 px-4">{user.email}</td>
                        <td className="py-2 px-4">{user.role}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="py-4 px-4 text-center" colSpan={3}>
                        No recent users
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
 * Простая карточка для статистики.
 * Можно вынести в отдельный файл (StatsCard.jsx).
 */
function StatsCard({ icon, title, value, description }) {
  return (
    <Card className="border border-gray-200">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="rounded-md bg-muted p-2">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
