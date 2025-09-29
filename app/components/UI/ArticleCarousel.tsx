"use client";

import { useState } from "react";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  PageDots,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ArticleCarouselFooter from "./ArticleCarouselFooter";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Group articles into pages
  const getPagedArticles = () => {
    const pages = [];
    for (let i = 0; i < articles.length; i += itemsPerPage) {
      pages.push(articles.slice(i, i + itemsPerPage));
    }
    return pages;
  };

  const pagedArticles = getPagedArticles();

  const getCurrentPageItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return articles.slice(startIndex, endIndex);
  };

  const nextPage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex);
  };

  if (!articles || articles.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No news articles available</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-8xl mx-auto py-8 px-6">
      <Carousel totalItems={articles.length} className="w-full">
        <CarouselContent>
          {pagedArticles.map((page, pageIndex) => (
            <CarouselItem key={pageIndex} className="w-full">
              <div className="grid grid-cols-4 gap-4">
                {page.map((article) => (
                  <Card
                    key={article.article_id}
                    className="h-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Image */}
                    {article.image_url && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image_url}
                          alt={article.title}
                          className="w-full h-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
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
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        <PageDots />
      </Carousel>
    </div>
  );
}
