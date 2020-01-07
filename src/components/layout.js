import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import LayoutStyles from '../styles/layout.module.scss'

class Layout extends React.Component {
    componentDidMount() {
        try {
            this.UIkit = require('uikit/dist/js/uikit')
            this.Icons = require('uikit/dist/js/uikit-icons')
            this.UIkit.use(this.Icons)
        } catch (e) {}
    }

    render() {
        return (
            <div>
                <div className={LayoutStyles.content}>
                    <Header />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout
