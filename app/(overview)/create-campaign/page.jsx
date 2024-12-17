// "use client";

// import React, { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";
// import { Calendar, Video, PlusCircle, Upload } from "lucide-react";

// export default function CreateProjectPage() {
//   const [videoFile, setVideoFile] = useState(null);
//   const [videoPreview, setVideoPreview] = useState(null);

//   const handleVideoChange = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     setVideoFile(file);
//     const previewURL = URL.createObjectURL(file);
//     setVideoPreview(previewURL);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Тут ваша логика отправки на сервер, например, через fetch или axios
//     alert("Проект создан! (Добавьте реальную логику сохранения данных)");
//   };

//   return (
//     <div className="container sm:px-6 lg:px-8 mx-auto px-4 space-y-6">
//       <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-16">
//         <div className="max-w-5xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
//             Create a New Fundraiser
//           </h1>
//           <p className="max-w-xl text-lg text-gray-700 mb-6">
//             Launch your idea and invite backers from all around the world to
//             support your campaign!
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 mt-6 flex flex-col lg:flex-row gap-6 lg:gap-8 lg:mt-10">
//         <aside className="hidden lg:block w-full lg:w-1/4">
//           <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 sticky top-10">
//             <h2 className="text-lg font-semibold mb-4">Create Project Steps</h2>
//             <ol className="list-decimal list-inside text-sm space-y-2">
//               <li>General Info</li>
//               <li>Add Media</li>
//               <li>Goal & Deadline</li>
//               <li>Review & Submit</li>
//             </ol>
//           </div>
//         </aside>

//         {/* Карточка с формой */}
//         <main className="w-full lg:w-3/4">
//           <Card className="border border-gray-200 shadow-sm">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-2">
//                 <PlusCircle className="h-5 w-5 text-primary" />
//                 New Fundraiser
//               </CardTitle>
//               <CardDescription>
//                 Fill out the form below to start your project.
//               </CardDescription>
//             </CardHeader>

//             <CardContent>
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div>
//                   <Label htmlFor="projectName">Project Name</Label>
//                   <Input
//                     id="projectName"
//                     type="text"
//                     placeholder="E.g., 'Smart Kettle'"
//                     className="mt-1"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="shortDesc">Short Description</Label>
//                   <Textarea
//                     id="shortDesc"
//                     placeholder="Tell us what's unique about your project..."
//                     className="mt-1"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <Label>Category</Label>
//                   <Select>
//                     <SelectTrigger className="mt-1">
//                       <SelectValue placeholder="— Select category —" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="technology">Technology</SelectItem>
//                       <SelectItem value="art">Art</SelectItem>
//                       <SelectItem value="music">Music</SelectItem>
//                       <SelectItem value="film">Film</SelectItem>
//                       <SelectItem value="games">Games</SelectItem>
//                       <SelectItem value="design">Design</SelectItem>
//                       <SelectItem value="food">Food</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div>
//                   <Label htmlFor="fullDesc">Detailed Description</Label>
//                   <Textarea
//                     id="fullDesc"
//                     placeholder="Share the full story of your project..."
//                     rows={5}
//                     className="mt-1"
//                   />
//                 </div>

//                 <div>
//                   <Label
//                     htmlFor="videoUpload"
//                     className="flex items-center gap-2"
//                   >
//                     <Upload className="h-4 w-4" />
//                     Upload Video
//                   </Label>
//                   <Input
//                     id="videoUpload"
//                     type="file"
//                     accept="video/*"
//                     className="mt-1"
//                     onChange={handleVideoChange}
//                   />
//                   <p className="text-sm text-gray-500 mt-1">
//                     Supported formats: MP4, WebM, MOV, etc.
//                   </p>

//                   {videoPreview && (
//                     <video
//                       src={videoPreview}
//                       controls
//                       className="mt-4 w-full max-h-[300px] rounded border"
//                     />
//                   )}
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="goal">Funding Goal (USD)</Label>
//                     <Input
//                       id="goal"
//                       type="number"
//                       placeholder="E.g., 50000"
//                       className="mt-1"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <Label htmlFor="deadline">Deadline</Label>
//                     <div className="relative mt-1">
//                       <Input id="deadline" type="date" />
//                       <Calendar className="absolute top-2.5 left-2 h-5 w-5 text-gray-500" />
//                     </div>
//                   </div>
//                 </div>

//                 <div>
//                   <Label htmlFor="coverUrl">Cover Image (URL)</Label>
//                   <Input
//                     id="coverUrl"
//                     type="text"
//                     placeholder="E.g., https://example.com/mycover.jpg"
//                     className="mt-1"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   variant="default"
//                   className="mt-4 w-full md:w-auto"
//                 >
//                   Launch Project
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>
//         </main>
//       </div>
//     </div>
//   );
// }

"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Users, Calendar, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      {/* Hero Section */}
      <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
        <Image
          src="https://via.placeholder.com/1200x400"
          alt="Project Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-6">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Next.js Blog
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold">About this Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            This is a blog built using Next.js. It focuses on performance,
            scalability, and ease of use. The blog features a responsive design
            and advanced features for developers and readers alike.
          </p>

          {/* Progress Bar */}
          <div className="space-y-2">
            <h3 className="font-semibold">Funding Progress</h3>
            <Progress value={50} className="w-full" />
            <span className="text-sm text-muted-foreground">
              $5,000 raised out of $10,000
            </span>
          </div>

          {/* Image Gallery */}
          <div>
            <h3 className="font-semibold mb-3">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Image
                src="https://via.placeholder.com/300"
                alt="Gallery Image 1"
                width={200}
                height={150}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://via.placeholder.com/300"
                alt="Gallery Image 2"
                width={200}
                height={150}
                className="rounded-lg object-cover"
              />
              <Image
                src="https://via.placeholder.com/300"
                alt="Gallery Image 3"
                width={200}
                height={150}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="p-4">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          <Button className="w-full" size="lg">
            Support This Project
          </Button>
        </div>
      </div>

      {/* Related Projects */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Related Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Image
                src="https://via.placeholder.com/300"
                alt="React Dashboard"
                width={300}
                height={200}
                className="rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg">React Dashboard</CardTitle>
              <p className="text-sm text-muted-foreground">
                An admin dashboard built with React.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <Image
                src="https://via.placeholder.com/300"
                alt="E-Commerce Site"
                width={300}
                height={200}
                className="rounded-t-lg object-cover"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-lg">E-Commerce Platform</CardTitle>
              <p className="text-sm text-muted-foreground">
                A scalable e-commerce platform for modern businesses.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
