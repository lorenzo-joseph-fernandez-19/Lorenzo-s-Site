import React from "react"
import Layout from '../components/layout'
import { Link } from "gatsby"
import '../styles/mystyles.scss'

const Home = () => {
  return (
    <Layout pageMeta={{
      title: "Home",
      keywords: ["construction"],
      description: "Taniko Group"
  }}>
      <section className="section has-text-centered">
        <h1>Lorenzo Fernandez</h1>
      </section>
    </Layout>
  )
}

export default Home