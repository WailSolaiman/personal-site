import UIkit from 'uikit/dist/js/uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import React, { useEffect } from 'react'
import { GlobalContextThemeProvider } from '../context/GlobalContextThemeProvider'
import { GlobalContextLanguageProvider } from '../context/GlobalContextLanguageProvider'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'

const Layout = ({ children }) => {
	useEffect(() => {
		UIkit.use(Icons)
	}, [])
	return (
		<GlobalContextThemeProvider>
			<GlobalContextLanguageProvider>
				<div className={LayoutStyles.container}>
					<Header />
					<main>{children}</main>
				</div>
				<Footer />
			</GlobalContextLanguageProvider>
		</GlobalContextThemeProvider>
	)
}

export default Layout
