import React from 'react'

interface CategoryImageProps{
    imageLink: any
    imageDescription: string
}

export const CategoryImage = (categoryImageProps: CategoryImageProps) => {
  return (
    <img 
    className=''
    style={{
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px'
    }}
    src={categoryImageProps.imageLink} 
    alt={categoryImageProps.imageDescription} />
  )
}