// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Card components (from your code)
// function cn(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// function Card({ className, ...props }) {
//   return (
//     <div
//       data-slot="card"
//       className={cn(
//         "bg-white text-gray-900 flex flex-col gap-4 rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// function CardHeader({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-header"
//       className={cn(
//         "grid auto-rows-min items-start gap-1.5 px-4 pt-4",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// function CardTitle({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-title"
//       className={cn("leading-tight font-semibold text-gray-900 line-clamp-2", className)}
//       {...props}
//     />
//   );
// }

// function CardDescription({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-description"
//       className={cn("text-gray-600 text-sm line-clamp-3", className)}
//       {...props}
//     />
//   );
// }

// function CardContent({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-content"
//       className={cn("px-4", className)}
//       {...props}
//     />
//   );
// }

// function CardFooter({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-footer"
//       className={cn("flex items-center justify-between px-4 pb-4", className)}
//       {...props}
//     />
//   );
// }

// // Carousel components
// const CarouselContext = React.createContext(null);

// function useCarousel() {
//   const context = React.useContext(CarouselContext);
//   if (!context) {
//     throw new Error('useCarousel must be used within a Carousel');
//   }
//   return context;
// }

// function Carousel({ children, className, ...props }) {
//   const [currentIndex, setCurrentIndex] = React.useState(0);
//   const [itemsPerView, setItemsPerView] = React.useState(4);
//   const containerRef = React.useRef(null);

//   // Sample data - replace with your actual articles
//   const sampleArticles = [
//     {
//       article_id: '1',
//       title: 'Understanding React Hooks',
//       description: 'A comprehensive guide to using React hooks effectively in your applications.',
//       image_url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
//       pubDate: '2024-01-15',
//       link: 'https://example.com/react-hooks'
//     },
//     {
//       article_id: '2',
//       title: 'Modern CSS Techniques',
//       description: 'Explore the latest CSS features and how to implement them in your projects.',
//       image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
//       pubDate: '2024-01-20',
//       link: 'https://example.com/css-techniques'
//     },
//     {
//       article_id: '3',
//       title: 'JavaScript ES2024 Features',
//       description: 'Discover the new features and improvements coming to JavaScript.',
//       image_url: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop',
//       pubDate: '2024-01-25',
//       link: 'https://example.com/js-features'
//     },
//     {
//       article_id: '4',
//       title: 'Web Performance Optimization',
//       description: 'Learn how to make your websites faster and more efficient.',
//       image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
//       pubDate: '2024-02-01',
//       link: 'https://example.com/performance'
//     },
//     {
//       article_id: '5',
//       title: 'TypeScript Best Practices',
//       description: 'Master TypeScript with these proven patterns and techniques.',
//       image_url: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
//       pubDate: '2024-02-05',
//       link: 'https://example.com/typescript'
//     },
//     {
//       article_id: '6',
//       title: 'Database Design Principles',
//       description: 'Learn the fundamentals of designing efficient and scalable databases.',
//       image_url: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=300&fit=crop',
//       pubDate: '2024-02-10',
//       link: 'https://example.com/database'
//     }
//   ];

//   React.useEffect(() => {
//     const updateItemsPerView = () => {
//       if (window.innerWidth >= 1024) {
//         setItemsPerView(4);
//       } else if (window.innerWidth >= 768) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(1);
//       }
//     };

//     updateItemsPerView();
//     window.addEventListener('resize', updateItemsPerView);
//     return () => window.removeEventListener('resize', updateItemsPerView);
//   }, []);

//   const maxIndex = Math.max(0, sampleArticles.length - itemsPerView);

//   const next = React.useCallback(() => {
//     setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
//   }, [maxIndex]);

//   const previous = React.useCallback(() => {
//     setCurrentIndex(prev => Math.max(prev - 1, 0));
//   }, []);

//   const canScrollPrev = currentIndex > 0;
//   const canScrollNext = currentIndex < maxIndex;

//   const contextValue = {
//     currentIndex,
//     itemsPerView,
//     articles: sampleArticles,
//     canScrollPrev,
//     canScrollNext,
//     scrollPrev: previous,
//     scrollNext: next,
//   };

//   return (
//     <CarouselContext.Provider value={contextValue}>
//       <div
//         ref={containerRef}
//         className={cn("relative", className)}
//         {...props}
//       >
//         {children}
//       </div>
//     </CarouselContext.Provider>
//   );
// }

// function CarouselContent({ className, ...props }) {
//   const { currentIndex, itemsPerView, articles } = useCarousel();

//   return (
//     <div className="overflow-hidden">
//       <div
//         className="flex transition-transform duration-300 ease-in-out"
//         style={{
//           transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
//         }}
//         {...props}
//       >
//         {articles.map((article, index) => (
//           <div
//             key={article.article_id}
//             className={cn(
//               "flex-none px-3",
//               itemsPerView === 1 && "w-full",
//               itemsPerView === 2 && "w-1/2",
//               itemsPerView === 4 && "w-1/4"
//             )}
//           >
//             <Card className="h-full">
//               {/* Image */}
//               {article.image_url && (
//                 <div className="relative h-48 overflow-hidden rounded-t-lg">
//                   <img
//                     src={article.image_url}
//                     alt={article.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                     onError={(e) => {
//                       e.currentTarget.style.display = "none";
//                     }}
//                   />
//                 </div>
//               )}

//               {/* Content */}
//               <CardHeader>
//                 <CardTitle>{article.title}</CardTitle>
//                 {article.description && (
//                   <CardDescription>{article.description}</CardDescription>
//                 )}
//               </CardHeader>

//               <CardFooter>
//                 <div className="flex flex-col gap-2 w-full">
//                   {article.pubDate && (
//                     <p className="text-xs text-gray-400">
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
//               </CardFooter>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function CarouselPrevious({ className, ...props }) {
//   const { canScrollPrev, scrollPrev } = useCarousel();

//   return (
//     <button
//       className={cn(
//         "absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
//         className
//       )}
//       disabled={!canScrollPrev}
//       onClick={scrollPrev}
//       {...props}
//     >
//       <ChevronLeft className="h-5 w-5" />
//     </button>
//   );
// }

// function CarouselNext({ className, ...props }) {
//   const { canScrollNext, scrollNext } = useCarousel();

//   return (
//     <button
//       className={cn(
//         "absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed",
//         className
//       )}
//       disabled={!canScrollNext}
//       onClick={scrollNext}
//       {...props}
//     >
//       <ChevronRight className="h-5 w-5" />
//     </button>
//   );
// }

// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// // Card components (from your code)
// function cn(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// function Card({ className, ...props }) {
//   return (
//     <div
//       data-slot="card"
//       className={cn(
//         "bg-white text-gray-900 flex flex-col gap-4 rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// function CardHeader({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-header"
//       className={cn(
//         "grid auto-rows-min items-start gap-1.5 px-4 pt-4",
//         className
//       )}
//       {...props}
//     />
//   );
// }

// function CardTitle({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-title"
//       className={cn("leading-tight font-semibold text-gray-900 line-clamp-2", className)}
//       {...props}
//     />
//   );
// }

// function CardDescription({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-description"
//       className={cn("text-gray-600 text-sm line-clamp-3", className)}
//       {...props}
//     />
//   );
// }

// function CardContent({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-content"
//       className={cn("px-4", className)}
//       {...props}
//     />
//   );
// }

// function CardFooter({ className, ...props }) {
//   return (
//     <div
//       data-slot="card-footer"
//       className={cn("flex items-center justify-between px-4 pb-4", className)}
//       {...props}
//     />
//   );
// }

import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-amber-500/20 text-amber-400 flex flex-col gap-6 rounded-lg border p-0.5 shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "grid auto-rows-min items-start gap-1.5 px-4 pt-4",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-gray-600 text-sm line-clamp-3", className)}
      {...props}
    />
  );
}

// function CardAction({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-action"
//       className={cn(
//         "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
//         className
//       )}
//       {...props}
//     />
//   );
// }

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-4", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center justify-between px-4 pb-4", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
