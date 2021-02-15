import React from 'react'
import { Helmet } from "react-helmet"
import Header from '../components/header'
import Footer from '../components/footer'


const Layout = ({ pageMeta, children }) => (
    <>
      <Helmet>
        <title>{`Lorenzo Fernandez | ${pageMeta.title}`}</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Lorenzo Fernandez" />
      <html lang="en"/>
      <meta name="description" content={pageMeta.description} />
      <meta name="keywords" content={pageMeta.keywords.join(',')} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap" rel="stylesheet" />
      </Helmet>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )

  export default Layout