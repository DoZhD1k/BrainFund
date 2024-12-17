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
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Textarea } from "@/components/ui/textarea";

export default function AddSubCategory({ categories }) {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [newSubCategory, setNewSubCategory] = useState({
    name: "",
    description: "",
    category_id: "",
  });

  const handleCreate = async () => {
    if (
      !newSubCategory.name ||
      !newSubCategory.description ||
      !newSubCategory.category_id
    ) {
      toast.error("Все поля обязательны.");
      return;
    }

    const res = await fetch("/api/admin/categories/add-subcategory", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSubCategory),
    });

    if (res.ok) {
      toast.success("Подкатегория успешно добавлена!");
      setOpen(false);
      setNewSubCategory({ name: "", description: "", category_id: "" });
    } else {
      const data = await res.json();
      toast.error(data.message || "Ошибка при добавлении.");
    }
  };

  return (
    <div>
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>
              <PlusCircle className="mr-2" /> Добавить подкатегорию
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Добавить подкатегорию</SheetTitle>
              <SheetDescription>
                Заполните форму для добавления новой подкатегории.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Название
                </label>
                <Input
                  placeholder="Введите название подкатегории"
                  value={newSubCategory.name}
                  onChange={(e) =>
                    setNewSubCategory({
                      ...newSubCategory,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Описание
                </label>
                <Textarea
                  placeholder="Введите описание подкатегории"
                  value={newSubCategory.description}
                  onChange={(e) =>
                    setNewSubCategory({
                      ...newSubCategory,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Родительская категория
                </label>
                <Select
                  value={newSubCategory.category_id}
                  onValueChange={(value) =>
                    setNewSubCategory({ ...newSubCategory, category_id: value })
                  }
                >
                  <SelectTrigger>Выберите родительскую категорию</SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <SheetFooter>
              <Button onClick={handleCreate} className="w-full mt-4">
                Сохранить
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2" /> Добавить подкатегорию
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Добавить подкатегорию</DialogTitle>
              <DialogDescription>
                Заполните форму для добавления новой подкатегории.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Название
                </label>
                <Input
                  placeholder="Название подкатегории"
                  value={newSubCategory.name}
                  onChange={(e) =>
                    setNewSubCategory({
                      ...newSubCategory,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Описание
                </label>
                <Input
                  placeholder="Описание"
                  value={newSubCategory.description}
                  onChange={(e) =>
                    setNewSubCategory({
                      ...newSubCategory,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Выберите Главную категорию
                </label>
                <Select
                  value={newSubCategory.category_id}
                  onValueChange={(value) =>
                    setNewSubCategory({ ...newSubCategory, category_id: value })
                  }
                >
                  <SelectTrigger>Выберите родительскую категорию</SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleCreate}>Сохранить</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
