import clientImage from './assets/client.png';
import clientImage1 from './assets/client1.png';
import Nettoyage from './assets/nettoyage-depollutionB.svg'
import OneShore from './assets/oneshore-offshoreB.svg'
import Logistique from './assets/transport-logistiqueB.svg'
import Location from './assets/location-enginsB.svg'

export const testimonials = [
    {
        id: 1,
        title: 'shell',
        detail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum perspiciatis 
                excepturi ut reprehenderit suscipit et esse minus, odit at voluptate qui nesciunt 
                adipisci repellendus natus vitae laudantium distinctio ullam fugit nam est velit 
                itaque quia sapiente expedita.`,
        image: clientImage
    },
    {
        id: 2,
        title: 'assala energy',
        detail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum perspiciatis 
                excepturi ut reprehenderit suscipit et esse minus, odit at voluptate qui nesciunt 
                adipisci repellendus natus vitae laudantium distinctio ullam fugit nam est velit 
                itaque quia sapiente expedita.`,
        image: clientImage1
    },
    {
        id: 3,
        title: 'sogara',
        detail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum perspiciatis 
                excepturi ut reprehenderit suscipit et esse minus, odit at voluptate qui nesciunt 
                adipisci repellendus natus vitae laudantium distinctio ullam fugit nam est velit 
                itaque quia sapiente expedita.`,
        image: clientImage
    },
    {
        id: 4,
        title: 'oilibya',
        detail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum perspiciatis 
                excepturi ut reprehenderit suscipit et esse minus, odit at voluptate qui nesciunt 
                adipisci repellendus natus vitae laudantium distinctio ullam fugit nam est velit 
                itaque quia sapiente expedita.`,
        image: clientImage1
    },
    {
        id: 5,
        title: 'ola energy',
        detail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum perspiciatis 
                excepturi ut reprehenderit suscipit et esse minus, odit at voluptate qui nesciunt 
                adipisci repellendus natus vitae laudantium distinctio ullam fugit nam est velit 
                itaque quia sapiente expedita.`,
        image: clientImage1
    },
    {
        id: 6,
        title: 'sobraga',
        detail: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum perspiciatis 
                excepturi ut reprehenderit suscipit et esse minus, odit at voluptate qui nesciunt 
                adipisci repellendus natus vitae laudantium distinctio ullam fugit nam est velit 
                itaque quia sapiente expedita.`,
        image: clientImage
    },
]

export const services = [
    {
        id: 1,
        ImgServ: Nettoyage,
        title: "nettoyage industriel et dépollution",
        route: "/nettoyage"
    },
    {
        id: 2,
        ImgServ: OneShore,
        title: "maintenance Oneshore et OffShore",
        route: "/maintenances"
    },
    {
        id: 3,
        ImgServ: Logistique,
        title: "Logistique et transport",
        route: "/logistique"
    },
    {
        id: 4,
        ImgServ: Location,
        title: "Location des engins",
        route: "/location"
    }
]
