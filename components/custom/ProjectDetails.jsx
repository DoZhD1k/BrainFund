"use client";

import React, { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, DollarSign, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function ProjectDetails() {
  // Рефы для якорных ссылок
  const storyRef = useRef(null);
  const tiersRef = useRef(null);
  const rewardsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-12 gap-10">
      {/* Left: Якорные ссылки */}
      <div className="hidden lg:block lg:col-span-2 space-y-4 sticky top-20">
        <h3 className="text-lg font-semibold mb-4">Sections</h3>
        <nav className="space-y-2 text-muted-foreground">
          <Button
            variant="link"
            onClick={() => scrollToSection(storyRef)}
            className="block text-left hover:text-primary"
          >
            Story
          </Button>
          <Button
            variant="link"
            onClick={() => scrollToSection(tiersRef)}
            className="block text-left hover:text-primary"
          >
            Tiers
          </Button>
        </nav>
      </div>

      {/* Center: Основной контент */}
      <div className="lg:col-span-7 space-y-10">
        {/* Story Section */}
        <section ref={storyRef} id="story">
          <h2 className="text-2xl font-bold mb-4">Story</h2>
          <p className="leading-relaxed text-gray-600">
            This is the full story about the project. You can add images,
            formatted text, and any other information about the project here.
          </p>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Project Story"
            className="mt-4 rounded-lg"
          />
        </section>

        <Separator />

        {/* Tiers Section */}
        <section ref={tiersRef} id="tiers">
          <h2 className="text-2xl font-bold mb-4">Tiers</h2>
          <p>Different support tiers can be explained here.</p>
        </section>

        <Separator />

        {/* Available Rewards Section */}
        {/* <section ref={rewardsRef} id="rewards">
          <h2 className="text-2xl font-bold mb-4">Available Rewards</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardHeader className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <CardTitle>Pledge $10</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Get a special thank you shoutout and access to exclusive
                  project updates.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Select Reward
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center space-x-2">
                <Gift className="w-5 h-5 text-primary" />
                <CardTitle>Pledge $50</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Receive a limited edition project item and behind-the-scenes
                  access.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Select Reward
                </Button>
              </CardContent>
            </Card>
          </div>
        </section> */}
      </div>

      {/* Right: Плашка с поддержкой проекта */}
      {/* <div className="lg:col-span-3 space-y-6">
        <Card className="p-4">
          <CardHeader>
            <CardTitle>Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Make a pledge without a reward.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <span>US$</span>
              <input
                type="number"
                min="1"
                placeholder="1"
                className="border rounded-lg p-2 w-full"
              />
            </div>
            <Button className="w-full">
              Back it because you believe in it
            </Button>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
