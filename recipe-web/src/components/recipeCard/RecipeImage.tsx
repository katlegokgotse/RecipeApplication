import React from 'react'

interface ImageProps{
    imageLink: any, 
    imageDescription: string
}

export const RecipeImage = (imageProps: ImageProps) => {
  return (
    <img 
        style={{
            borderRadius: '75%',
            width: '100%',
            height: '30vh'
        }}
        src={imageProps.imageLink} 
        alt={imageProps.imageDescription} 
        className='m-1'/>
  )
}