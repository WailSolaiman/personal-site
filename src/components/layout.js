import UIkit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import React,{ useEffect } from 'react'
import '../styles/index.scss'
import Header from './header'
import Footer from './footer'
import LayoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
    useEffect(() => {
        UIkit.use(Icons)
    }, [])
    return (
        <div>
            <div className={LayoutStyles.content}>
                <Header />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
