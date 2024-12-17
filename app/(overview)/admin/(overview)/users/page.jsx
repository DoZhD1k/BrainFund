"use client";

import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import AddUser from "../../components/users/addUser";
import DataTableUser from "../../components/users/tableUser";
export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container sm:px-6 lg:px-8 mx-auto px-4 space-y-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin Panel</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Users</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative w-full overflow-hidden bg-gradient-to-tr rounded-lg from-indigo-300 via-purple-300 to-pink-300">
        <div className="container mx-auto py-16 px-6 lg:px-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md">
            Manage Users
          </h1>
          <p className="mt-4 max-w-xl text-gray-700 text-lg">
            Manage this shit
          </p>
        </div>
      </div>

      {/* Адаптивная таблица */}
      <div className="w-full">
        <div className="space-y-4">
          <AddUser />
          <DataTableUser users={users} />
        </div>
      </div>
    </div>
  );
}
