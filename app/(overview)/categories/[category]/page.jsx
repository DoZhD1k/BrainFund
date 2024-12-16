// import { useRouter } from "next/navigation";
// import Projects from "@/components/custom/Projects";

// export default function CategoryPage() {
//   const router = useRouter();
//   const { category } = router.query;

//   const validCategories = ["games", "technologies", "film"];

//   if (!category) {
//     return <h1 className="text-center text-2xl font-bold mt-20">Loading...</h1>;
//   }

//   if (!validCategories.includes(category)) {
//     return (
//       <h1 className="text-center text-2xl font-bold mt-20">
//         404 - Category Not Found
//       </h1>
//     );
//   }

//   const categoryDetails = {
//     games: {
//       title: "Discover games fundraisers on FundItUp",
//       description:
//         "Help others by donating to their fundraiser, or start one for someone you care about.",
//       image: "/icons/flaticon/games.svg",
//     },
//     technologies: {
//       title: "Discover technologies fundraisers on FundItUp",
//       description:
//         "Support tech enthusiasts to bring their ideas to life or fund new innovations.",
//       image: "/icons/flaticon/technologies.svg",
//     },
//     film: {
//       title: "Discover film fundraisers on FundItUp",
//       description:
//         "Help aspiring filmmakers to create their vision, or support an ongoing project.",
//       image: "/icons/flaticon/film.svg",
//     },
//   };

//   const { title, description, image } = categoryDetails[category] || {};

//   return (
//     <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//       <section className="mb-10">
//         <div className="flex flex-col items-center justify-between xl:flex-row">
//           <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
//             <h2 className="mb-6 font-sans font-bold tracking-tight md:mb-12 text-5xl sm:leading-none">
//               Discover {category} fundraisers on FundItUp
//             </h2>
//             <p className="max-w-xl mb-4 text-base md:text-lg">{description}</p>
//             <button className="px-6 py-3 mt-4 font-semibold text-white rounded bg-indigo-500 hover:bg-indigo-700">
//               Start a Fundraiser
//             </button>
//           </div>

//           <div className="w-full max-w-sm xl:w-5/12">
//             <div className="p-6 bg-stone-300 rounded-lg shadow-lg">
//               <img
//                 src={image}
//                 alt={`${category} icon`}
//                 className="w-32 h-56 mx-auto mb-4"
//               />
//               <p className="text-center text-lg font-medium text-gray-700">
//                 Explore fundraisers for {category}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="border-t border-gray-300 my-">
//         <div className="flex flex-col items-center justify-between xl:flex-row mt-5">
//           <div className="w-full max-w-2xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
//             <h3 className="font-medium mb-6 font-sans md:mb-12 text-5xl md:text-3xl sm:leading-none">
//               Explore <span className="text-indigo-500">9283749</span> projects
//             </h3>
//           </div>
//         </div>
//         <Projects category={category} />
//       </section>
//     </div>
//   );
// }

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
