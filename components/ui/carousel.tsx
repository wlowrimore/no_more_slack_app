"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext<{
  currentIndex: number;
  totalPages: number;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
} | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a Carousel");
  }
  return context;
}

interface CarouselProps extends React.ComponentProps<"div"> {
  totalItems: number;
}

function Carousel({
  children,
  totalItems,
  className,
  ...props
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const prevPage = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < totalPages - 1;

  const contextValue = {
    currentIndex,
    totalPages,
    canScrollPrev,
    canScrollNext,
    scrollPrev: prevPage,
    scrollNext: nextPage,
  };

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { currentIndex } = useCarousel();
  const totalPages = useCarousel().totalPages;
  console.log("totalPages from useCarousel", totalPages);

  return (
    <>
      <div className="flex items-end justify-between mb-4 px-3">
        <h2 className="text-3xl tracking-wide font-bold text-slate-500">
          Latest Political News
        </h2>
        <div className="text-sm text-slate-500">
          Page {currentIndex + 1} of {totalPages}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className={cn(
            "flex transition-transform duration-300 ease-in-out",
            className
          )}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          {...props}
        >
          {children}
        </div>
      </div>
    </>
  );
}

function CarouselItem({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex-none w-1/4 px-3", className)} {...props}>
      {children}
    </div>
  );
}

function CarouselPrevious({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { canScrollPrev, scrollPrev } = useCarousel();

  return (
    <button
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={cn(
        "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 text-black bg-white rounded-full cursor-pointer p-2 shadow-lg border hover:bg-amber-400 disabled:text-neutral-500 disabled:bg-neutral-600/80 disabled:cursor-not-allowed transition-all duration-200",
        className
      )}
      {...props}
    >
      <ChevronLeft className="size-8" />
    </button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
  const { canScrollNext, scrollNext } = useCarousel();

  return (
    <button
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={cn(
        "absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 text-black bg-white rounded-full cursor-pointer p-2 shadow-lg border hover:bg-amber-400 disabled:text-neutral-500 disabled:bg-neutral-600/80 disabled:cursor-not-allowed transition-all duration-200",
        className
      )}
      {...props}
    >
      <ChevronRight className="size-8" />
    </button>
  );
}

function PageDots({ className, ...props }: React.ComponentProps<"div">) {
  const { currentIndex, totalPages } = useCarousel();

  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center mt-8 space-x-2",
        className
      )}
      {...props}
    >
      <span className="w-[10rem] flex gap-2.5 items-center justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={cn(
              "w-4 h-4 rounded-full bg-gray-300 cursor-pointer hover:scale-125 transition-all duration-200",
              currentIndex === index ? "bg-amber-400" : ""
            )}
          />
        ))}
      </span>

      <div className="text-center mt-4 text-noral text-gray-400">
        Use arrow buttons or dots to navigate through pages
      </div>
    </div>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  PageDots,
};
