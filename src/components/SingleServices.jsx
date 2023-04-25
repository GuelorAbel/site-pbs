import { useEffect } from "react"
import { Link } from 'react-router-dom'
// Aos animation
import Aos from 'aos'

export default function SingleServices({ImgServ, title, route}) {
    // initialisation des animation
  useEffect(() => {
    Aos.init({
      duration: 1200
    });
  }, []);

  return (
    <div className="mb-4">
        <Link to={`${route}`} title="CLIQUEZ POUR DECOUVRIR LE SERVICE..." className="flex flex-col md:flex-row gap-4 items-center" 
        data-aos="zoom-in" data-aos-delay="900">
                
            <img src={ImgServ} alt="" className="w-[150px] h-[100px]" />


            <h6 className="text-center md:text-left text-lg md:text-xl text-blanc tracking-widest uppercase font-semibold">
                {title}
            </h6>
        </Link>
    </div>
  )
}
