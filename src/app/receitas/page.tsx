import RecipeCard from "@/components/RecipeCard"
import { recipes } from "@/lib/data"

export default function ReceitasPage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Todas as receitas</h1>

        {/* cards */}
        <div className="grid grid-cols-3 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}/>
          ))}
        </div>
      </div>
    </main>
  )
}