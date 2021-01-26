import React, { useRef, useEffect } from 'react'
import {TweenMax, Power2} from 'gsap'
import Header from '../components/header'
import { Link } from 'gatsby'
import Profile from '../images/profile.jpg'
import "../styles/mystyles.scss"

const Home = () => {
  let profile = useRef(null)

  useEffect(() => {
    TweenMax.to(profile, 1, {opacity: 1, x: 60, ease: Power2.easeInOut, scale: 0.6})
  }, [])

  return (
   <div>
     <Header />
   <h2>Hello, I am</h2>
   <p> </p>
    <img ref={el =>{profile = el}} src={Profile} width="200px" />
   </div>
  )
}
export default Home