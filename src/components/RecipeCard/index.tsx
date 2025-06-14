import { Recipe } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

interface RecipeCardProps {
  recipe: Recipe
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link href={`/receitas/${recipe.id}`}>
      <div className="border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-48 w-full">
          <Image 
            src={recipe.image}
            fill
            alt={recipe.title}
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-bold">{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
    </Link>
  )
}