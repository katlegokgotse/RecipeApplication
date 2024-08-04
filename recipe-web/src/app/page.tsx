import { CategoriesCard } from "@/components/categoryCard/CategoriesCard";
import { RecipeCard } from "@/components/recipeCard/RecipeCard";
import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-col justify-content-center items-center">
        <h1>Random Meal of the day!</h1>
        <div className="w-[70%] justify-content-center">
       <RecipeCard
        recipeImage={"https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg"} 
        recipeDescription={"This is a pizza"} 
        recipeName={"Pizza"}/>
        </div>
        <div  className="w-[70%] justify-content-center">
          <CategoriesCard text={"Beef"} imageLink={"https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg"} />
        </div>
      </main>
  );
}
