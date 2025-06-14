import Image from "next/image";
import Link from "next/link";

export default function RecipeCard() {
  return (
    <Link href={""}>
      <div>
        <div className="relative h-48 w-full">
          <Image 
            src="/receitas/bolo-chocolate.png"
            fill
            alt="Nome da receita"
          />
        </div>

        <div>
          <h3>Nome da receita</h3>
          <p>Descrição da receita</p>
        </div>
      </div>
    </Link>
  )
}