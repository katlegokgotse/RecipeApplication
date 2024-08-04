import React from 'react'
import { CategoryHeading } from './CategoryHeading'
import { CategoryImage } from './CategoryImage'

interface CategoryProps{
  text: string,
  imageLink: any
}

export const CategoriesCard = (categoryProps: CategoryProps) => {
  return (
    <div className='flex flex-col w-[20%] rounded-xl bg-red-100 mt-[25px]'>
      <div className='w-[100%] rounded-xl'>
        <CategoryImage imageLink={categoryProps.imageLink} imageDescription={categoryProps.imageLink}/>
      </div>
      <div className='flex items-center justify-content-center w-[25%]'>
        <CategoryHeading text={categoryProps.text} />
      </div>
    </div>
  )
}