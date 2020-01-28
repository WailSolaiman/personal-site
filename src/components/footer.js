import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Cookiebar from './cookiebar'
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
        <div>
            <Cookiebar />
            <Background background="color-bg-nr10" withPadding={false}>
                <footer className={footerStyles.footer}>
                    <div className="uk-padding-small">
                        <p className="uk-text-center uk-margin-small-bottom">
                            <AniLink fade to="/imprint">
                                Impressum
                            </AniLink>{' '}
                            |{' '}
                            <AniLink fade to="/dataPrivacy">
                                Datenschutz
                            </AniLink>
                        </p>
                        <p className="uk-text-center uk-margin-remove">
                            Created by {data.site.siteMetadata.author}. © 2020
                        </p>
                    </div>
                </footer>
            </Background>
            <div className={footerStyles.toTopBtn}>
                <button onClick={() => scrollTo('#nav')} type="button">
                    <span uk-icon="chevron-up" />
                </button>
            </div>
        </div>
    )
}

export default Footer
