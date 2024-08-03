import { RecipeCard } from "@/components/recipeCards/RecipeCard";
import Image from "next/image";

export default function Home() {
  return (
      <main>
        <h1>Random Meal of the day!</h1>
        <div className="w-[15%] ">
        <RecipeCard 
        cardImage={"data:image/jpeg;base64,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"} 
        cardImageDescription={undefined} 
        ingredientName={"Pizza"} 
        ingredientDescription={"Pizza"}/>
        </div>
      
      </main>
  );
}
