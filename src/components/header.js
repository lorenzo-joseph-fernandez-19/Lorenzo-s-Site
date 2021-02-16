import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'gatsby'

const Header = () => {
  let logo = useRef(null)

  useEffect(() => {
   gsap.to(logo, 1, {opacity: 1, y: 20})
  }, [])


  return (
   <div>
     <ul className="menu" ref={el => {logo = el}}>
         <li className="header-item"><Link className="logo" to="/">Lorenzo Fernandez <span className="sub-logo">Front End Web Developer</span></Link></li>
         <div className="nav-links">
            <li><Link className="header-item" to="/">My Work</Link></li>
            <li><Link className="header-item" to="/contact">Contact Me</Link></li>
            <li><Link className="header-item" to="/resume">Hire Me!</Link></li>
        </div>
     </ul>
   </div>
  )
}
export default Header