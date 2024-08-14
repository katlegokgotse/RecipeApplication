"use client"
import { CategoriesCard } from "@/components/categoryCard/CategoriesCard";
import { RecipeCard } from "@/components/recipeCard/RecipeCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [icategories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try{
        const categoriesResponse = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
      if (categoriesResponse.ok){
        const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData.categories);
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
       <RecipeCard
        recipeImage={"https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg"} 
        recipeDescription={"This is a pizza"} 
        recipeName={"Pizza"}/>
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
