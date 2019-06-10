import React from 'react'
import UIkit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
    UIkit.use(Icons)
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
