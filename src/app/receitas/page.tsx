import { recipes } from "@/lib/data"

export default function ReceitasPage() {
  return (
    <main>
      <h1>Todas as receitas</h1>

      {/* cards */}
      <div>
        { recipes.map((recipe) => (
          <div>
            {/* card da receita */}
          </div>
        )) }
      </div>
    </main>
  )
}