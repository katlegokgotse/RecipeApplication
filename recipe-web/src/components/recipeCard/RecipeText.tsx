import React from 'react'

interface RecipeTextProp{
    recipeHeading: string,
    recipeNormalText: string
}


export const RecipeText = (recipeProps: RecipeTextProp) => {
  return (
    <div className=''>
        <div>
            <RecipeHeadingText recipeHeading={recipeProps.recipeHeading} recipeNormalText={recipeProps.recipeNormalText} />
        </div>
        <div>
            <RecipeNormalText recipeHeading={recipeProps.recipeHeading} recipeNormalText={recipeProps.recipeNormalText} />
        </div>
    </div>
  )
}

const RecipeHeadingText = ({recipeHeading}: RecipeTextProp) => {
    return(
        <h1 className='' style={{fontWeight: 600, fontSize: 48}}>{recipeHeading}</h1>
    )
}

const RecipeNormalText = ({recipeNormalText}: RecipeTextProp) => {
    return(
        <p>{recipeNormalText}</p>
    )
}