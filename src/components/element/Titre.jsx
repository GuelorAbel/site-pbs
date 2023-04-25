import React from 'react'

export default function Titre({children}) {
  // états, données dynamiques
  const defaultDesign = "text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-title mb-3 mt-2" 

  // comportement et rendu du titre selon les cas
  // rendu navigateur
  return (
    <>
      {/* <div className="bg-vert w-32 h-1 mb-3"></div> */}
      <h1 className={`${defaultDesign}`}>
         {children}
      </h1>
    </>
  )
}
