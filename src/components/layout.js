import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'

const Layout = () => {
    return (
        <Helmet>
            <Header />

            <Footer />
        </Helmet>
    )
}

export default Layout