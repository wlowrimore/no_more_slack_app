"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

const NewsCarousel = ({ articles }: NewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  // Calculate total number of pages
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Get current page items
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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl tracking-wide font-bold text-slate-500">
          Latest Political News
        </h2>
        <div className="text-sm text-gray-500">
          Page {currentIndex + 1} of {totalPages}
        </div>
      </div>

      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevPage}
          disabled={totalPages <= 1}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 text-black bg-white rounded-full p-2 shadow-lg border hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextPage}
          disabled={totalPages <= 1}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 text-black bg-white rounded-full p-2 shadow-lg border hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Content */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 ease-in-out">
            {getCurrentPageItems().map((article, index) => (
              <div
                key={article.article_id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                currentIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}

      {/* Keyboard navigation hint */}
      <div className="text-center mt-4 text-xs text-gray-400">
        Use arrow buttons or dots to navigate through pages
      </div>
    </div>
  );
};

export default NewsCarousel;
