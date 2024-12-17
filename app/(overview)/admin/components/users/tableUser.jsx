"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

// Функция для форматирования даты с учётом времени Казахстана
function formatDate(dateString) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Almaty",
  }).format(date);
}

export default function DataTableUser({ users }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow className="bg-gray-100">
            <TableHead className="py-3 px-4 text-left font-semibold">
              ID
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Name
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Email
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Role
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Created
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Updated
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id} className="hover:bg-gray-50">
                <TableCell className="py-3 px-4">{user.id}</TableCell>
                <TableCell className="py-3 px-4">{user.name}</TableCell>
                <TableCell className="py-3 px-4">{user.email}</TableCell>
                <TableCell className="py-3 px-4">{user.role}</TableCell>
                <TableCell className="py-3 px-4">
                  {formatDate(user.created_at)}
                </TableCell>
                <TableCell className="py-2 px-4">
                  {formatDate(user.updated_at)}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="py-4 text-center text-gray-500">
                No categories found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
