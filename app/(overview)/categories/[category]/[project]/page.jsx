"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Users,
  LinkIcon,
  ChevronRight,
  DollarSign,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import ProjectDetails from "@/components/custom/ProjectDetails";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import Player from "@/components/custom/Player";

export default function ProjectPage({ params }) {
  const [showDetails, setShowDetails] = useState(false); // Состояние для показа

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/categories/category/id`}>
              category name
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>project name</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-3">
          <Card className="overflow-hidden">
            {/* <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center"></div>
            </div> */}
            <Player
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video"
            />
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4 mt-8">
                <Badge variant="secondary">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date().toLocaleDateString()}
                </Badge>
                <Badge variant="secondary">
                  <Tag className="w-4 h-4 mr-2" />
                  category name
                </Badge>
              </div>
              <p className="text-xl font-bold leading-relaxed mb-6">
                project name
              </p>
              <p className="text-md text-gray-700 leading-relaxed mb-6">
                project description
              </p>{" "}
              {/* <Button
                className="w-full sm:w-auto mt-8"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? "Hide Details" : "View Project Details"}
              </Button> */}
              <ProjectDetails />
            </CardContent>
          </Card>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>Key info about this project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Funding Progress</h3>
                <Progress value={50} className="w-full" />
                <span className="text-sm text-muted-foreground">
                  $5,000 raised out of $10,000
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-muted-foreground">
                  Ends on 18.12.2024
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-muted-foreground">
                  500 Contributors
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <LinkIcon className="w-4 h-4 text-gray-500" />
                <Link href="#" className="text-sm text-primary hover:underline">
                  Visit Official Website
                </Link>
              </div>
              <Button className="w-full" size="lg">
                Support This Project
              </Button>
            </CardContent>
          </Card>

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

          <Separator />

          <ScrollArea className="h-[40%] w-full rounded-md border">
            <h2 className="text-2xl font-bold mb-4">Available Rewards</h2>
            <div className="grid gap-6 grid-cols-1">
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
                  <Image
                    src="https://via.placeholder.com/300"
                    alt="Gallery Image 1"
                    width={200}
                    height={150}
                    className="rounded-lg object-cover"
                  />
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
          </ScrollArea>
        </div>
      </div>

      <div className="mt-8">
        <Link href={`/categories/web-development`}>
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to category name Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
