// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// // Interface matching your API data structure
// interface Article {
//   article_id: string;
//   title: string;
//   description?: string;
//   image_url?: string;
//   pubDate?: string;
//   link?: string;
// }

// interface ArticleCarouselProps {
//   articles: Article[];
//   title?: string;
//   getCurrentPageItems: () => Article[]; // Add this to match your existing function
// }

// export default function ArticleCarousel({
//   articles,
//   getCurrentPageItems,
//   title = "Latest Articles",
// }: ArticleCarouselProps) {
//   // Use your existing function to get the items to display
//   const displayItems = getCurrentPageItems();

//   return (
//     <div className="w-full max-w-7xl mx-auto p-6">
//       <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

//       <Carousel totalItems={displayItems.length} className="w-full">
//         <CarouselContent>
//           {displayItems.map((article, index) => (
//             <CarouselItem key={article.article_id}>
//               <Card className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                 {/* Image */}
//                 {article.image_url && (
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={article.image_url}
//                       alt={article.title}
//                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                       onError={(e) => {
//                         e.currentTarget.style.display = "none";
//                       }}
//                     />
//                   </div>
//                 )}

//                 {/* Content */}
//                 <div className="p-4">
//                   <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
//                     {article.title}
//                   </h3>
//                   {article.description && (
//                     <p className="text-gray-600 text-sm mb-3 line-clamp-3">
//                       {article.description}
//                     </p>
//                   )}
//                   {article.pubDate && (
//                     <p className="text-xs text-gray-400 mb-3">
//                       {new Date(article.pubDate).toLocaleDateString()}
//                     </p>
//                   )}
//                   {article.link && (
//                     <a
//                       href={article.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
//                     >
//                       Read more →
//                     </a>
//                   )}
//                 </div>
//               </Card>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Interface matching your API data structure
interface Article {
  article_id: string;
  title: string;
  description?: string;
  image_url?: string;
  pubDate?: string;
  link?: string;
}

interface ArticleCarouselProps {
  articles: Article[];
  title?: string;
}

export default function ArticleCarousel({
  articles,
  title = "Latest Articles",
}: ArticleCarouselProps) {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>

      <Carousel totalItems={articles.length} className="w-full">
        <CarouselContent>
          {articles.map((article, index) => (
            <CarouselItem key={article.article_id}>
              <Card className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Image */}
                {article.image_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image_url}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {article.description}
                    </p>
                  )}
                  {article.pubDate && (
                    <p className="text-xs text-gray-400 mb-3">
                      {new Date(article.pubDate).toLocaleDateString()}
                    </p>
                  )}
                  {article.link && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                    >
                      Read more →
                    </a>
                  )}
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
