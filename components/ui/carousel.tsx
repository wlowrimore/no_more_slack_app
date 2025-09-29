// import React from "react";
// import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// const CarouselContext = React.createContext<{
//   currentIndex: number;
//   itemsPerView: number;
//   totalItems: number;
//   canScrollPrev: boolean;
//   canScrollNext: boolean;
//   scrollPrev: () => void;
//   scrollNext: () => void;
// } | null>(null);

// function useCarousel() {
//   const context = React.useContext(CarouselContext);
//   if (!context) {
//     throw new Error("useCarousel must be used within a Carousel");
//   }
//   return context;
// }

// interface CarouselProps extends React.ComponentProps<"div"> {
//   totalItems: number;
// }

// function Carousel({
//   children,
//   totalItems,
//   className,
//   ...props
// }: CarouselProps) {
//   const [currentIndex, setCurrentIndex] = React.useState(0);
//   const [itemsPerView, setItemsPerView] = React.useState(4);

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
//     window.addEventListener("resize", updateItemsPerView);
//     return () => window.removeEventListener("resize", updateItemsPerView);
//   }, []);

//   const maxIndex = Math.max(0, totalItems - itemsPerView);

//   const next = React.useCallback(() => {
//     setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
//   }, [maxIndex]);

//   const previous = React.useCallback(() => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   }, []);

//   const canScrollPrev = currentIndex > 0;
//   const canScrollNext = currentIndex < maxIndex;

//   const contextValue = {
//     currentIndex,
//     itemsPerView,
//     totalItems,
//     canScrollPrev,
//     canScrollNext,
//     scrollPrev: previous,
//     scrollNext: next,
//   };

//   return (
//     <CarouselContext.Provider value={contextValue}>
//       <div className={cn("relative", className)} {...props}>
//         {children}
//       </div>
//     </CarouselContext.Provider>
//   );
// }

// function CarouselContent({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<"div">) {
//   const { currentIndex, itemsPerView } = useCarousel();

//   return (
//     <div className="overflow-hidden">
//       <div
//         className={cn(
//           "flex transition-transform duration-300 ease-in-out",
//           className
//         )}
//         style={{
//           transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
//         }}
//         {...props}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// function CarouselItem({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<"div">) {
//   const { itemsPerView } = useCarousel();

//   return (
//     <div
//       className={cn(
//         "flex-none px-3",
//         itemsPerView === 1 && "w-full",
//         itemsPerView === 2 && "w-1/2",
//         itemsPerView === 4 && "w-1/4",
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// }

// function CarouselPrevious({
//   className,
//   ...props
// }: React.ComponentProps<"button">) {
//   const { canScrollPrev, scrollPrev } = useCarousel();

//   return (
//     <button
//       className={cn(
//         "absolute -left-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
//         className
//       )}
//       disabled={!canScrollPrev}
//       onClick={scrollPrev}
//       {...props}
//     >
//       <CircleArrowLeft className="size-8 bg-black text-amber-200 hover:text-amber-100 hover:bg-neutral-700" />
//     </button>
//   );
// }

// function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
//   const { canScrollNext, scrollNext } = useCarousel();

//   return (
//     <button
//       className={cn(
//         "absolute -right-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
//         className
//       )}
//       disabled={!canScrollNext}
//       onClick={scrollNext}
//       {...props}
//     >
//       <CircleArrowRight className="size-8 bg-black text-amber-200 hover:text-amber-100 hover:bg-neutral-700" />
//     </button>
//   );
// }

// export {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// };

"use client";

// import React from "react";
// import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
// import { cn } from "@/lib/utils";

// const CarouselContext = React.createContext<{
//   currentIndex: number;
//   itemsPerView: number;
//   totalItems: number;
//   canScrollPrev: boolean;
//   canScrollNext: boolean;
//   scrollPrev: () => void;
//   scrollNext: () => void;
// } | null>(null);

// function useCarousel() {
//   const context = React.useContext(CarouselContext);
//   if (!context) {
//     throw new Error("useCarousel must be used within a Carousel");
//   }
//   return context;
// }

// interface CarouselProps extends React.ComponentProps<"div"> {
//   totalItems: number;
// }

// function Carousel({
//   children,
//   totalItems,
//   className,
//   ...props
// }: CarouselProps) {
//   const [currentIndex, setCurrentIndex] = React.useState(0);
//   const [itemsPerView, setItemsPerView] = React.useState(4);

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
//     window.addEventListener("resize", updateItemsPerView);
//     return () => window.removeEventListener("resize", updateItemsPerView);
//   }, []);

//   // Reset currentIndex if it exceeds bounds after resize
//   React.useEffect(() => {
//     const maxIndex = Math.max(0, totalItems - itemsPerView);
//     if (currentIndex > maxIndex) {
//       setCurrentIndex(maxIndex);
//     }
//   }, [itemsPerView, totalItems, currentIndex]);

//   const maxIndex = Math.max(0, totalItems - itemsPerView);

//   const next = React.useCallback(() => {
//     setCurrentIndex((prev) => {
//       const newIndex = Math.min(prev + itemsPerView, maxIndex);
//       return newIndex;
//     });
//   }, [maxIndex, itemsPerView]);

//   const previous = React.useCallback(() => {
//     setCurrentIndex((prev) => {
//       const newIndex = Math.max(prev - itemsPerView, 0);
//       return newIndex;
//     });
//   }, [itemsPerView]);

//   const canScrollPrev = currentIndex > 0;
//   const canScrollNext = currentIndex < maxIndex;

//   const contextValue = {
//     currentIndex,
//     itemsPerView,
//     totalItems,
//     canScrollPrev,
//     canScrollNext,
//     scrollPrev: previous,
//     scrollNext: next,
//   };

//   return (
//     <CarouselContext.Provider value={contextValue}>
//       <div className={cn("relative", className)} {...props}>
//         {children}
//       </div>
//     </CarouselContext.Provider>
//   );
// }

// function CarouselContent({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<"div">) {
//   const { currentIndex, itemsPerView } = useCarousel();

//   return (
//     <div className="overflow-hidden">
//       <div
//         className={cn(
//           "flex transition-transform duration-300 ease-in-out",
//           className
//         )}
//         style={{
//           transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
//         }}
//         {...props}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// function CarouselItem({
//   className,
//   children,
//   ...props
// }: React.ComponentProps<"div">) {
//   const { itemsPerView } = useCarousel();

//   return (
//     <div
//       className={cn(
//         "flex-none px-3",
//         itemsPerView === 1 && "w-full",
//         itemsPerView === 2 && "w-1/2",
//         itemsPerView === 4 && "w-1/4",
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// }

// function CarouselPrevious({
//   className,
//   ...props
// }: React.ComponentProps<"button">) {
//   const { canScrollPrev, scrollPrev } = useCarousel();

//   return (
//     <button
//       className={cn(
//         "absolute -left-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
//         className
//       )}
//       disabled={!canScrollPrev}
//       onClick={scrollPrev}
//       {...props}
//     >
//       <CircleArrowLeft className="size-8 bg-black text-amber-200 hover:text-amber-100 hover:bg-neutral-700" />
//     </button>
//   );
// }

// function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
//   const { canScrollNext, scrollNext } = useCarousel();

//   return (
//     <button
//       className={cn(
//         "absolute -right-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
//         className
//       )}
//       disabled={!canScrollNext}
//       onClick={scrollNext}
//       {...props}
//     >
//       <CircleArrowRight className="size-8 bg-black text-amber-200 hover:text-amber-100 hover:bg-neutral-700" />
//     </button>
//   );
// }

// export {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// };

import React from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext<{
  currentIndex: number;
  itemsPerView: number;
  totalItems: number;
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
  const [itemsPerView, setItemsPerView] = React.useState(4);

  React.useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  const next = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const maxScroll = totalItems - itemsPerView;
      const nextIndex = Math.min(prev + 1, maxScroll);
      return nextIndex;
    });
  }, [totalItems, itemsPerView]);

  const previous = React.useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Calculate if we can scroll
  const canScrollPrev = currentIndex > 0;
  const canScrollNext =
    totalItems > itemsPerView && currentIndex < totalItems - itemsPerView;

  // Debug logging - remove this in production
  React.useEffect(() => {
    console.log({
      currentIndex,
      itemsPerView,
      totalItems,
      canScrollPrev,
      canScrollNext,
      maxIndex: totalItems - itemsPerView,
    });
  }, [currentIndex, itemsPerView, totalItems, canScrollPrev, canScrollNext]);

  const contextValue = {
    currentIndex,
    itemsPerView,
    totalItems,
    canScrollPrev,
    canScrollNext,
    scrollPrev: previous,
    scrollNext: next,
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
  const { currentIndex, itemsPerView } = useCarousel();

  return (
    <div className="overflow-hidden">
      <div
        className={cn(
          "flex transition-transform duration-300 ease-in-out",
          className
        )}
        style={{
          transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

function CarouselItem({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { itemsPerView } = useCarousel();

  return (
    <div
      className={cn(
        "flex-none px-3",
        itemsPerView === 1 && "w-full",
        itemsPerView === 2 && "w-1/2",
        itemsPerView === 4 && "w-1/4",
        className
      )}
      {...props}
    >
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
      className={cn(
        "absolute -left-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <CircleArrowLeft className="size-8 bg-black text-amber-200 hover:text-amber-100 hover:bg-neutral-700" />
    </button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<"button">) {
  const { canScrollNext, scrollNext } = useCarousel();

  return (
    <button
      className={cn(
        "absolute -right-8 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <CircleArrowRight className="size-8 bg-black text-amber-200 hover:text-amber-100 hover:bg-neutral-700" />
    </button>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
