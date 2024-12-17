"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null); // Для вывода сообщений об ошибке / успехе

  useEffect(() => {
    // Получаем данные о пользователе
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setName(data.name || "");
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("/api/user/update", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });
      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || "Failed to update");
      }
      setStatus("Profile updated successfully!");
      // Можно перезагрузить данные пользователя или обновить в стейте
    } catch (error) {
      setStatus(error.message);
    }
  };

  if (!user) {
    return (
      <div className="container mx-auto mt-10">
        <h2 className="text-xl font-semibold">Please login first</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <h1 className="text-3xl font-bold mb-4">My Profile</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>User Information</CardTitle>
          <CardDescription>
            Basic info fetched from /api/auth/me
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            <strong>ID:</strong> {user.userId}
          </p>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email || "No email stored"}
          </p>
          <p>
            <strong>Role:</strong> {user.role}
          </p>
        </CardContent>
      </Card>

      <Separator className="my-6" />

      <Card>
        <CardHeader>
          <CardTitle>Update Profile</CardTitle>
          <CardDescription>Change your name or password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                className="mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">New Password</Label>
              <Input
                id="password"
                type="password"
                className="mt-1"
                placeholder="Leave blank to keep old password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {status && <p className="text-sm text-red-500">{status}</p>}
            <Button type="submit" variant="default">
              Save changes
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            Changing password is optional.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
