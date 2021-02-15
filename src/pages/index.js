import React, { useRef, useEffect } from 'react'
import {gsap, Power2} from 'gsap'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Profile from '../images/profile.jpg'
import "../styles/mystyles.scss"

const Home = () => {
  let profile = useRef(null)

  useEffect(() => {
    gsap.to(profile, 1, {opacity: 1, x: 600, y: 120, ease: Power2.easeOut, scale: 1.5 })
  }, [])

  return (
   <Layout pageMeta={{
    title: "Home",
    keywords: [],
    description: "This is my portfolio"
  }}>
  <div className="page-width">
    <h2 className="hero-title">An aspiring Entrepreneur with a passion for Design, Digital Marketing <br /> and Web Development.</h2>
    <img ref={el =>{profile = el}} src={Profile} width="300px" alt="Image of Me"/>
  </div>
   </Layout>
  )
}
export default Home