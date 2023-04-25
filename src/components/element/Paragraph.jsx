import React from 'react'

export default function Paragraph({children, variant, className}) {
    // états, données dynamiques
    const defaultDesign = "text-xs md:text-sm lg:text-base tracking-wide leading-tight mb-4 mt-2"
    switch(variant){
        case "secondary":
            return (
                <p className={`${className} ${defaultDesign} text-blanc`}> {children} </p>
            )
        default : return (
            <p className={`${className} ${defaultDesign} text-noir`}> {children} </p>
        )
    }
}
