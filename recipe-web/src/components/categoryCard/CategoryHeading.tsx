import React from 'react'

interface CategoryText{
    text: string
}

export function CategoryHeading(categoryText: CategoryText) {
  return (
        <h1 style={{
          textAlign: 'center',
          width: '100%',
          fontWeight: 800,
          fontSize: '24px',
          color: '#000000',
        }}>
          {categoryText.text}
        </h1>
  )
}