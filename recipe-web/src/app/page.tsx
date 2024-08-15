"use client"
import { CategoriesCard } from "@/components/categoryCard/CategoriesCard";
import { RecipeCard } from "@/components/recipeCard/RecipeCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [icategories, setCategories] = useState([]);
  const [meal, setMeal] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const categoriesResponse : Response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const randomMealResponse : Response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      if (categoriesResponse.ok && randomMealResponse.ok){
        const categoriesData = await categoriesResponse.json();
        const mealData = await randomMealResponse.json();
          setCategories(categoriesData.categories);
          setMeal(mealData.meals)
      } else {
        throw new Error("Categories error")
      }
    }catch(e: any) {
      setError(e.message)
    }
  };
    fetchData();
  }, [])
  return (
      <main className="flex flex-col justify-content-center items-center">
        <h1>Random Meal of the day!</h1>
        <div className="w-[70%] justify-content-center">
        {
          error ? (
            <p>Error: {error}</p>
          ) : (
            meal.map((meals)=> (
              <RecipeCard
              recipeImage={meals.strMealThumb} 
              recipeDescription={meals.strInstructions} 
              recipeName={meals.strMeal}/>
            ))
           
          )}
        </div>
        <div  className="w-[70%] justify-content-center">
            { 
              error ? 
              (<p style={{
                color: '#000000'
              }}>Error: {error}</p>) 
              : 
              (icategories.map((category) => (
                   <CategoriesCard 
                    key = {category.idCategory}
                    text={category.strCategory} 
                    imageLink={category.strCategoryThumb} 
                    />
            ))
          )}
        </div>
      </main>
  );
}
