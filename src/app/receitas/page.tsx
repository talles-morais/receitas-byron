import { recipes } from "@/lib/data"

export default function ReceitasPage() {
  return (
    <main className="flex-grow">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold">Todas as receitas</h1>

        {/* cards */}
        <div>
          {recipes.map((recipe) => (
            <div>
              {/* card da receita */}
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}