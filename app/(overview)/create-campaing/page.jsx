// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Calendar, Tag } from "lucide-react";

// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardTitle,
//   CardDescription,
//   CardFooter,
// } from "@/components/ui/card";

// export default function CreateCampaingPage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2">
//           <Card className="overflow-hidden">
//             <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <h1 className="text-4xl font-bold text-white">name</h1>
//               </div>
//             </div>
//             <CardContent className="p-6">
//               <div className="flex items-center space-x-4 mb-4">
//                 <Badge variant="secondary">
//                   <Calendar className="w-4 h-4 mr-2" />
//                   {new Date().toLocaleDateString()}
//                 </Badge>
//                 <Badge variant="secondary">
//                   <Tag className="w-4 h-4 mr-2" />
//                   name
//                 </Badge>
//               </div>
//               <Input>
//                 <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                   description
//                 </p>
//               </Input>
//               <Button className="w-full sm:w-auto">View Project Details</Button>
//             </CardContent>
//           </Card>
//         </div>

//         <div className="lg:col-span-1">
//           <Card>
//             <CardHeader>
//               <CardTitle>Related Projects</CardTitle>
//               <CardDescription>Other projects in name</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-4">
//                 <li>
//                   <Link
//                     href={`/categories`}
//                     className="block hover:bg-gray-100 p-4 rounded-lg transition duration-200"
//                   >
//                     <h3 className="font-semibold text-lg mb-2">name</h3>
//                     <p className="text-sm text-gray-600">description</p>
//                   </Link>
//                 </li>
//               </ul>
//             </CardContent>
//           </Card>
//         </div>
//       </div>

//       <div className="mt-8">
//         <Link href={`/`}>
//           <Button variant="outline">
//             <ArrowLeft className="w-4 h-4 mr-2" />
//             Back to Home
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

export default function CreateCampaingPage() {
  // Локальный стейт для поля ввода:
  const [description, setDescription] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="relative h-64 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white">
                  <Input
                    className="mb-6 border-none"
                    id="campaignDescription"
                    placeholder="Your project name"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
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
                  name
                </Badge>
              </div>

              {/* Вместо использования <p> внутри <Input> */}
              <div className="mb-6">
                <label
                  htmlFor="campaignDescription"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <Input
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  id="campaignDescription"
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <Button className="w-full sm:w-auto">View Project Details</Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Related Projects</CardTitle>
              <CardDescription>Other projects in name</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={`/categories`}
                    className="block hover:bg-gray-100 p-4 rounded-lg transition duration-200"
                  >
                    <h3 className="font-semibold text-lg mb-2">name</h3>
                    <p className="text-sm text-gray-600">description</p>
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Link href={`/`}>
          <Button variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
