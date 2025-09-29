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
  console.log("articles in NewsCarousel via client page.tsx", articles);
  if (!articles || articles.length === 0) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-500">No news articles available</p>
      </div>
    );
  }

  return <ArticleCarousel articles={articles} title="Latest Political News" />;
}
