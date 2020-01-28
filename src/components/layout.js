import UIkit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import React, { useState, useEffect, useRef } from 'react'
import '../styles/index.scss'
import Header from './header'
import Footer from './footer'
import LayoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
    const [isSticky, setSticky] = useState(false)
    const ref = useRef(null)
    const handleScroll = () => {
        setSticky(ref.current.getBoundingClientRect().top <= 1000)
    }
    useEffect(() => {
        UIkit.use(Icons)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])
    return (
        <div>
            <div className={LayoutStyles.content}>
                <div className={`${isSticky ? ' sticky' : ''}`} ref={ref}>
                    <Header />
                </div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout
