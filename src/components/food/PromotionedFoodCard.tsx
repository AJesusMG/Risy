import Image from "next/image";
import { Food } from "@/interfaces/Food";

export function PromotionedFoodCard({ food }: { food: Food }) {
  return (
    <div className="group relative flex flex-row sm:flex-col gap-3 p-2 sm:p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <div className="relative w-24 h-24 sm:w-full sm:aspect-square overflow-hidden rounded-lg flex-shrink-0">
        <Image
          src={food.image}
          alt={food.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 640px) 96px, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-1 sm:gap-2 flex-grow">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2 flex-grow">{food.title}</h2>
          <div className="bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-xs font-medium text-primary shadow-sm whitespace-nowrap">
            Promoted
          </div>
        </div>
        
        {food.description && (
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{food.description}</p>
        )}
        
        {food.price && (
          <div className="flex items-center gap-2 mt-auto">
            <span className="text-base sm:text-lg font-bold text-primary">${food.price}</span>
            {food.originalPrice && (
              <span className="text-xs sm:text-sm text-gray-400 line-through">${food.originalPrice}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}