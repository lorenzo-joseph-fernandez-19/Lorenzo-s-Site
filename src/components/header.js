import React, { useRef, useEffect } from 'react'
import {TweenMax, Power2} from 'gsap'
import { Link } from 'gatsby'
import Logo from "../images/Logo.png"

const Header = () => {
  let logo = useRef(null)

  useEffect(() => {
    TweenMax.to(logo, 1, {opacity: 1, x: 60, ease: Power2.easeInOut, scale: 0.6})
  }, [])


  return (
   <div>
     <ul>
         <li>
         <Link to="/"><img ref={el => {logo = el}} src={Logo} alt="Logo"/></Link>
         </li>
     </ul>
   </div>
  )
}
export default Header