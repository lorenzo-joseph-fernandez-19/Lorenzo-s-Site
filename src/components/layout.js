import React from 'react'
import { Helmet } from "react-helmet"


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
      </Helmet>
      <div className="is-family-primary">
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </div>
    </>
  )

  export default Layout