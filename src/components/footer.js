import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Background from './background'
import footerStyles from '../styles/footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <Background background="uk-background-secondary" withPadding={false}>
            <footer className={footerStyles.footer}>
                <p>
                    Created by {data.site.siteMetadata.author}. copyright 2019
                </p>
            </footer>
        </Background>
    )
}

export default Footer
