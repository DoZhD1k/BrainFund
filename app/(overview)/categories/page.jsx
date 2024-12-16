// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { Dices } from "lucide-react";

// const categories = [
//   { name: "Games", icon: <Dices size={50} />, path: "games" },
//   {
//     name: "Technologies",
//     icon: "/icons/flaticon/technologies.svg",
//     path: "technologies",
//   },
//   { name: "Film", icon: "/icons/flaticon/film.svg", path: "film" },
// ];

// export default function CategorySelection() {
//   const router = useRouter();

//   return (
//     <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <div className="flex flex-col items-center justify-between xl:flex-row">
//         <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
//           <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight md:mb-12 sm:text-5xl sm:leading-none">
//             Browse Fundraisers by Category
//           </h2>
//           <p className="max-w-xl mb-4 text-base md:text-lg">
//             Explore campaigns around the world and contribute to causes you care
//             about.
//           </p>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className="flex flex-col items-center cursor-pointer"
//             onClick={() => router.push(`/category/${category.path}`)}
//           >
//             <div className="w-32 h-32 p-4 bg-stone-200 rounded-lg flex items-center justify-center hover:border hover:border-black transition">
//               {category.icon}
//             </div>
//             <h2 className="mt-2 text-sm font-medium text-gray-800">
//               {category.name}
//             </h2>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { categories } from "@/data/temp";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Users } from "lucide-react";

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Browse Fundraisers by Category
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore campaigns around the world and contribute to causes you care
            about.
          </p>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground opacity-20 rounded-3xl"></div>
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Fundraising collage"
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
      <Separator className="mt-6" />

      <div id="categories" className="mt-10 space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="group"
            >
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{category.projects.length} projects</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    View <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
