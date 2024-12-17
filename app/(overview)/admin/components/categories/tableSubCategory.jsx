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
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
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

export default function TableSubCategory({ subcategories, onEdit, onDelete }) {
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
              Parent Category
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Created At
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Updated At
            </TableHead>
            <TableHead className="py-3 px-4 text-left font-semibold">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {subcategories.length > 0 ? (
            subcategories.map((subcategory) => (
              <TableRow key={subcategory.id} className="hover:bg-gray-50">
                <TableCell className="py-3 px-4">{subcategory.id}</TableCell>
                <TableCell className="py-3 px-4">{subcategory.name}</TableCell>
                <TableCell className="py-3 px-4">
                  {subcategory.description || "No description"}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {subcategory.parent_name || "No parent"}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {formatDate(subcategory.created_at)}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {formatDate(subcategory.updated_at)}
                </TableCell>
                {/* Кнопки действий */}
                <TableCell className="py-3 px-4 flex space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => onEdit(subcategory)}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => onDelete(subcategory.id)}
                  >
                    <Trash className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="py-4 text-center text-gray-500">
                No subcategories found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
