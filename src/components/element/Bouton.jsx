import React from 'react'

export default function Bouton({children, className}) {
  // état, données dynamiques
  const defaultDesign = "btn-sm lg:btn-md hover:bg-vert hover:border-none hover:text-blanc"
  return (
      <button className={`${className} 
      shadow-md border border-vert text-vert uppercase transition-all ease-in-out duration-300 font-bold
      ${defaultDesign}`}
      >
         {children}
      </button>
  )
}
