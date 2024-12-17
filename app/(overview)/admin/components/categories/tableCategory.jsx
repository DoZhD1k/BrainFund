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

export default function TableCategory({ categories }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow-md border border-gray-200">
      <Table>
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="py-3 px-4 text-left font-semibold">
              ID
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Name
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Description
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Created At
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Updated At
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Project Count
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.length > 0 ? (
            categories.map((category) => (
              <TableRow key={category.id} className="hover:bg-gray-50">
                <TableCell className="py-3 px-4">{category.id}</TableCell>
                <TableCell className="py-3 px-4">{category.name}</TableCell>
                <TableCell className="py-3 px-4">
                  {category.description || "No description"}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {formatDate(category.created_at)}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {formatDate(category.updated_at)}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {category.projects_count}
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
