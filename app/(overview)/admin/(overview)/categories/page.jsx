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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AddCategory from "../../components/categories/addCategory";
import AddSubCategory from "../../components/categories/addSubCategory";
import TableCategory from "../../components/categories/tableCategory";
import TableSubCategory from "../../components/categories/tableSubCategory";

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));

    fetch("/api/subcategories")
      .then((res) => res.json())
      .then((data) => setSubcategories(data))
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
            <BreadcrumbPage>Categories</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative w-full overflow-hidden bg-gradient-to-tr rounded-lg from-indigo-300 via-purple-300 to-pink-300">
        <div className="container mx-auto py-16 px-6 lg:px-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 drop-shadow-md">
            Manage Categories & Subcategories
          </h1>
          <p className="mt-4 max-w-xl text-gray-700 text-lg">
            Organize categories and subcategories here.
          </p>
        </div>
      </div>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="subcategories">Subcategories</TabsTrigger>
        </TabsList>

        <TabsContent value="categories">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Categories</h2>
            <AddCategory />
            <TableCategory categories={categories} />
          </div>
        </TabsContent>

        <TabsContent value="subcategories">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Subcategories</h2>
            <AddSubCategory categories={categories} />
            <TableSubCategory subcategories={subcategories} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
