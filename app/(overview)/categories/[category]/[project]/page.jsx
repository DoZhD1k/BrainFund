// import { useRouter } from "next/router";

// const ProjectPage = () => {
//   const router = useRouter();
//   const { category, projectId } = router.query; // projectId вместо id
//   // Пример данных о проекте
//   const projectData = {
//     title: "Sample Project Title",
//     description: "This is a detailed description of the project.",
//     owner: "John Doe",
//     raised: "10 ETH",
//     backers: 25,
//   };

//   if (!category || !id) {
//     return (
//       <div className="min-h-screen flex items-center justify-center font-semibold ">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 min">
//       <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
//       <p className="text-lg mb-2 text-gray-600">{projectData.description}</p>
//       <p>
//         <strong>Category:</strong> {category}
//       </p>
//       <p>
//         <strong>Project ID:</strong> {id}
//       </p>
//       <p>
//         <strong>Owner:</strong> {projectData.owner}
//       </p>
//       <p>
//         <strong>Raised:</strong> {projectData.raised}
//       </p>
//       <p>
//         <strong>Backers:</strong> {projectData.backers}
//       </p>
//     </div>
//   );
// };

// export default ProjectPage;

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { categories } from "@/data/temp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

export default function ProjectPage({ params }) {
  const category = categories.find((c) => c.id === params.category);
  const project = category?.projects.find((p) => p.id === params.project);

  if (!category || !project) {
    notFound();
  }

  const relatedProjects = category.projects
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/categories/${category.id}`}>
              {category.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  {project.name}
                </h1>
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date().toLocaleDateString()}
                </Badge>
                <Badge variant="secondary">
                  <Tag className="w-4 h-4 mr-2" />
                  {category.name}
                </Badge>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>
              <Button className="w-full sm:w-auto">View Project Details</Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Related Projects</CardTitle>
              <CardDescription>
                Other projects in {category.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {relatedProjects.map((relatedProject) => (
                  <li key={relatedProject.id}>
                    <Link
                      href={`/categories/${category.id}/${relatedProject.id}`}
                      className="block hover:bg-gray-100 p-4 rounded-lg transition duration-200"
                    >
                      <h3 className="font-semibold text-lg mb-2">
                        {relatedProject.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {relatedProject.description.slice(0, 100)}...
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Link href={`/categories/${category.id}`}>
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {category.name} Projects
          </Button>
        </Link>
      </div>
    </div>
  );
}
