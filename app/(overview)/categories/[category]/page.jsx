import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "@/data/temp";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight, Users, DollarSign } from "lucide-react";
import Image from "next/image";

export default function CategoryPage({ params }) {
  const category = categories.find((c) => c.id === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <section className="mb-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Discover
              <Badge variant="secondary" className="ml-4 text-2xl py-1 px-3">
                {category.name}
              </Badge>
              <span className="block mt-2">fundraisers on FundItUp</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {category.description}
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start a Fundraiser
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-20 rounded-3xl"></div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt={`${category.name} fundraisers`}
              className="rounded-3xl object-cover w-full h-full"
              width={500}
              height={250}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4 sm:mb-0">
            Explore <span className="text-primary">9,283,749</span> projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {category.projects.map((project) => (
            <Link
              key={project.id}
              href={`/categories/${category.id}/${project.id}`}
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {project.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    by {project.creator}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-base line-clamp-3">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{project.backers} backers</span>
                  </div>
                  <div className="flex items-center text-sm font-medium">
                    <DollarSign className="w-4 h-4 mr-1 text-green-500" />
                    <span>{project.raised} raised</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
