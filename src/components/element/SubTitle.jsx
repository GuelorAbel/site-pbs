import React from 'react'

export default function SubTitle(props) {
    // états,données dynamique
    const {children, variant, theme, className} = props
    let color;

    // les différents comportements
    // la gestion de la couleur selon le theme
    switch(theme){
        case "secondary":
            color = "text-blanc tracking-widest"
            break
        default: color = "text-noir"
    }
    // la gestion des variantes des titres du h2 au h6
    switch(variant){
        case "h6": return(
            <h6 className={`text-lg md:text-xl ${className} ${color}`}> {children} </h6>
        )
        case "h5": return(
            <h5 className={`text-lg md:text-xl uppercase ${className} ${color}`}> {children} </h5>
        )
        case "h4": return(
            <h4 className={`text-xl md:text-2xl uppercase ${className} ${color}`}> {children} </h4>
        )
        case "h3": return(
            <h3 className={`text-2xl md:text-3xl uppercase ${className} ${color}`}> {children} </h3>
        )
        case "h2": return(
            <h2 className={`text-xl md:text-3xl lg:text-4xl uppercase font-title  ${className} ${color}`}> {children} </h2>
        )
    }
}
