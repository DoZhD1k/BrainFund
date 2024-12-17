"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { toast } from "react-toastify";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
export default function AddCategory() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [loading, setLoading] = useState(false);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const handleCreate = async () => {
    // Валидация
    if (!newCategory.name.trim() || !newCategory.description.trim()) {
      toast.error("Пожалуйста, заполните все поля.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/admin/categories/add-category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCategory),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setNewCategory({ name: "", description: "" }); // Очистка формы
        setOpen(false);
      } else {
        toast.error(data.message || "Ошибка при добавлении категории.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast.error("Ошибка при добавлении категории.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="default">
              <PlusCircle className="mr-2" /> Добавить категорию
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Создать категорию</SheetTitle>
              <SheetDescription>
                Заполните форму ниже, чтобы добавить новую категорию.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Название
                </label>
                <Input
                  placeholder="Введите название категории"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Описание
                </label>
                <Textarea
                  placeholder="Введите описание категории"
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <SheetFooter>
              <Button
                onClick={handleCreate}
                disabled={loading}
                className="w-full mt-4"
              >
                {loading ? "Сохранение..." : "Сохранить"}
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button variant="default">
              <PlusCircle className="mr-2" /> Добавить категорию
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Создать категорию</DialogTitle>
              <DialogDescription>
                Заполните форму ниже, чтобы добавить новую категорию.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Название
                </label>
                <Input
                  placeholder="Введите название категории"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Описание
                </label>
                <Textarea
                  placeholder="Введите описание категории"
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={handleCreate}
                disabled={loading}
                className="w-full mt-4"
              >
                {loading ? "Сохранение..." : "Сохранить"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
