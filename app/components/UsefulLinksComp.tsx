"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { LinkCategory } from "@/lib/usefulLinksCategories/ulc";
import { ExternalLink } from "lucide-react";
import NoAuthPageMMessage from "./UI/NoAuthPageMMessage";

interface UsefulLinksCompProps {
  linkCategories: LinkCategory[];
}
const UsefulLinksComp: React.FC<UsefulLinksCompProps> = ({
  linkCategories,
}) => {
  const { data: session } = useSession();
  const getLinkCategories = async () => {
    try {
      const response = await fetch("../../lib/usefulLinksCategories/ulc");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const linkCategories = await response.json();
        return linkCategories;
      }
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
  };
  getLinkCategories();

  return (
    <main>
      <section className="flex flex-col max-w-8xl mx-auto pt-12 pb-40">
        {!session ? (
          <NoAuthPageMMessage />
        ) : (
          <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-amber-200 mb-4">
                  Essential Resources for Democratic Participation
                </h1>
                <p className="text-lg text-amber-100/80 max-w-3xl mx-auto">
                  A curated collection of trusted organizations, legal
                  resources, and advocacy groups to empower informed citizenship
                  and protect constitutional rights.
                </p>
              </div>

              {/* Categories Grid */}
              <div className="space-y-12">
                {Array.isArray(linkCategories) &&
                  linkCategories.map(
                    (category: LinkCategory, categoryIndex: number) => (
                      <div
                        key={categoryIndex}
                        className="bg-neutral-800/50 border border-neutral-600/30 rounded-xl p-8 backdrop-blur-sm"
                      >
                        {/* Category Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400">
                            {category.icon}
                          </div>
                          <div>
                            <h2 className="text-2xl font-semibold text-amber-200">
                              {category.title}
                            </h2>
                            <p className="text-amber-100/60 mt-1">
                              {category.description}
                            </p>
                          </div>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-neutral-700/30 border border-neutral-600/20 rounded-lg p-6 hover:bg-neutral-700/50 hover:border-amber-500/30 transition-all duration-200"
                            >
                              <div className="flex items-start justify-between mb-3">
                                <h3 className="text-lg font-medium text-amber-200 group-hover:text-amber-100 transition-colors">
                                  {link.title}
                                </h3>
                                <ExternalLink className="w-4 h-4 text-amber-400/60 group-hover:text-amber-400 transition-colors flex-shrink-0 ml-2" />
                              </div>
                              <p className="text-amber-100/70 text-sm leading-relaxed">
                                {link.description}
                              </p>
                            </a>
                          ))}
                        </div>
                      </div>
                    )
                  )}
              </div>

              {/* Footer Note */}
              <div className="max-w-7xl mx-auto mb-22 mt-12 text-center">
                <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-6 max-w-7xl mx-auto">
                  <p className="text-amber-200/80 leading-relaxed">
                    <strong className="text-amber-200">Disclaimer:</strong>{" "}
                    These resources are provided for informational purposes
                    only. Links to external organizations do not constitute
                    endorsement of their positions or services. Always verify
                    information and seek appropriate professional advice for
                    your specific situation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default UsefulLinksComp;
