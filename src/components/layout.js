import React from 'react'
import '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
