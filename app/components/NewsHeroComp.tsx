"use client";

import { useState } from "react";
import type { Article } from "../components/UI/NewsCarousel";
import NewsCarousel from "../components/UI/NewsCarousel";
const NewsHeroComp = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/news");
      const result = await response.json();
      setArticles(result.results || []);
    } catch (error) {
      console.error("Failed to fetch news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-200 mb-4">
            Your Latest in Political News
          </h1>
          <button
            onClick={fetchNews}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Fetch Latest News"}
          </button>
        </div>

        {articles.length > 0 && <NewsCarousel articles={articles} />}
      </div>
    </main>
  );
};

export default NewsHeroComp;
