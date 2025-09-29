// "use client";
// import { useState } from "react";
// import ArticleCarousel from "./ArticleCarousel";

// export interface Article {
//   article_id: string;
//   title: string;
//   description: string;
//   image_url: string;
//   link?: string;
//   pubDate?: string;
// }

// interface NewsCarouselProps {
//   articles: Article[];
// }

// export default function NewsCarousel({ articles }: NewsCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const itemsPerPage = 4;

//   // Calculate total number of pages
//   const totalPages = Math.ceil(articles.length / itemsPerPage);

//   // Get current page items
//   const getCurrentPageItems = () => {
//     const startIndex = currentIndex * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return articles.slice(startIndex, endIndex);
//   };

//   const nextPage = () => {
//     setCurrentIndex((prev) => (prev + 1) % totalPages);
//   };

//   const prevPage = () => {
//     setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
//   };

//   const goToPage = (pageIndex: number) => {
//     setCurrentIndex(pageIndex);
//   };

//   if (!articles || articles.length === 0) {
//     return (
//       <div className="text-center p-8">
//         <p className="text-gray-500">No news articles available</p>
//       </div>
//     );
//   }

//   return (
//     <ArticleCarousel
//       articles={articles}
//       getCurrentPageItems={getCurrentPageItems}
//       title="Political News"
//     />
//   );
// }

"use client";
import ArticleCarousel from "./ArticleCarousel";

export interface Article {
  article_id: string;
  title: string;
  description: string;
  image_url: string;
  link?: string;
  pubDate?: string;
}

interface NewsCarouselProps {
  articles: Article[];
}

export default function NewsCarousel({ articles }: NewsCarouselProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No news articles available</p>
      </div>
    );
  }

  return <ArticleCarousel articles={articles} title="Latest Political News" />;
}
