"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function CampaignCard({ title, description, raised, backers }) {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="flex flex-col space-y-1 text-sm">
          <span className="font-semibold">{backers} backers</span>
          <span className="text-gray-500">${raised} raised</span>
        </div>
        <Button variant="outline" size="sm" className="whitespace-nowrap">
          View <ArrowRight />
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="container sm:px-6 lg:px-8 mx-auto px-4 space-y-6">
      {/* Hero-секция */}
      <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            FundItUp Crowdfunding
          </h1>
          <p className="max-w-xl text-lg text-gray-700 mb-6">
            Make ideas into reality. It’s where creators share new visions for
            creative work with the communities that will come together to fund
            them.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="default" className="px-6">
              <Link href="/about-us">Learn more</Link>
            </Button>
            <Button variant="outline" className="px-6">
              <Link href="/create-campaign">Create Campaign</Link>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto py-10 px-4 md:px-8 lg:px-16">
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">All Listed Campaign</h2>
              <Button variant="ghost" className="flex items-center gap-2">
                <Link className="flex items-center gap-2" href="/categories">
                  More in categories <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CampaignCard
                title="Next.js Blog"
                description="A blog built with Next.js"
                raised={1200}
                backers={30}
              />
              <CampaignCard
                title="React Dashboard"
                description="An admin dashboard built with React"
                raised={2500}
                backers={55}
              />
              <CampaignCard
                title="Tailwind UI Kit"
                description="Prebuilt UI components for Tailwind CSS"
                raised={800}
                backers={15}
              />
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Created Campaign</h2>
              <Button variant="ghost" className="flex items-center gap-2">
                Manage <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <CampaignCard
                title="Smart Kettle"
                description="An IoT-based kettle with auto scheduling"
                raised={5000}
                backers={100}
              />
              <CampaignCard
                title="Community Art"
                description="A digital art platform for local artists"
                raised={2300}
                backers={45}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
