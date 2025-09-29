import React from "react";

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
}

const ArticleCarouselFooter = ({ articles }: ArticleCarouselProps) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

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

  return (
    <main>
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
        Use arrow buttons to navigate through pages • {totalPages} pages total
      </div>
    </main>
  );
};

export default ArticleCarouselFooter;
