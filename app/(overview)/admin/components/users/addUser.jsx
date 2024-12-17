"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/Sheet";
import {
  Dialog,
  DialogClose,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";

export default function AddUser() {
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  const [loading, setLoading] = useState(false);

  const handleCreate = async () => {
    // Простая валидация
    if (
      !newUser.name.trim() ||
      !newUser.email.trim() ||
      !newUser.password.trim() ||
      !newUser.role.trim()
    ) {
      toast.error("Пожалуйста, заполните все поля.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/admin/users/add-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        // Очистка формы
        setNewUser({
          name: "",
          email: "",
          password: "",
          role: "user",
        });
        setOpen(false);
      } else {
        toast.error(data.message || "Ошибка при добавлении пользователя.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при добавлении пользователя.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            {/* <Button variant="primary">
             */}
            <Button>
              <PlusCircle className="mr-2" /> Добавить пользователя
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-xl font-bold">
                Создать аккаунт
              </SheetTitle>
              <SheetDescription className="text-sm text-gray-500">
                Заполните форму ниже, чтобы добавить нового пользователя.
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Имя</label>
                <Input
                  placeholder="Введите имя"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  placeholder="Введите email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Пароль</label>
                <Input
                  type="password"
                  placeholder="Введите пароль"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Роль</label>
                <Select
                  value={newUser.role}
                  onValueChange={(value) =>
                    setNewUser({ ...newUser, role: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите роль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">Пользователь</SelectItem>
                    <SelectItem value="admin">Администратор</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <SheetFooter>
              <Button
                type="button"
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
            {/* <Button variant="primary">
             */}
            <Button variant="">
              <PlusCircle className="mr-2" /> Добавить пользователя
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md w-full mx-auto rounded-lg shadow-lg bg-white p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Создать аккаунт
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-500">
                Заполните форму ниже, чтобы добавить нового пользователя.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Имя</label>
                <Input
                  placeholder="Введите имя"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  placeholder="Введите email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Пароль</label>
                <Input
                  type="password"
                  placeholder="Введите пароль"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Роль</label>
                <Select
                  value={newUser.role}
                  onValueChange={(value) =>
                    setNewUser({ ...newUser, role: value })
                  }
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите роль" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="user">Пользователь</SelectItem>
                    <SelectItem value="admin">Администратор</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
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
