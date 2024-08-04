import React from 'react'
import { RecipeText } from './RecipeText'
import { RecipeImage } from './RecipeImage'

type RecipeCardProps = {
  recipeImage: any,
  recipeDescription: string
  recipeName: string,
}

export const RecipeCard = (recipeProps: RecipeCardProps) => {
  return (
    <div
      className='flex flex-row w-[100%] rounded-xl'
      style={{ backgroundColor: "#ff6d6e" }}
    >
      <div>
        <RecipeImage
          imageLink={recipeProps.recipeImage}
          imageDescription={recipeProps.recipeImage}
        />
      </div>
      <div>
        <RecipeText recipeHeading={recipeProps.recipeName} recipeNormalText={recipeProps.recipeDescription} />
      </div>
    </div>
  )
}