import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Cookiebar from '../components/cookiebar'
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
        <>
            <Cookiebar />
            <Background
                background="uk-background-secondary"
                withPadding={false}
            >
                <footer className={footerStyles.footer}>
                    <p className="uk-text-center uk-margin-remove-bottom">
                        Created by {data.site.siteMetadata.author}. copyright
                        2019
                    </p>
                    <p className="uk-text-center uk-margin-remove-top">
                        <AniLink fade to="/imprint">
                            Impressum
                        </AniLink>{' '}
                        |{' '}
                        <AniLink fade to="/dataPrivacy">
                            Datenschutzerklärung
                        </AniLink>
                    </p>
                </footer>
            </Background>
        </>
    )
}

export default Footer
