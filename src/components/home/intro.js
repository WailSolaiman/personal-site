import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import IntroStyles from '../../styles/intro.module.scss'

const Intro = () => {
    const data = useStaticQuery(graphql`
        {
            image1: file(relativePath: { eq: "images/home/intro1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image2: file(relativePath: { eq: "images/home/intro2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const introImg1 = data.image1.childImageSharp.fluid
    const introImg2 = data.image2.childImageSharp.fluid
    return (
        <div className="uk-width-1-1" uk-grid="">
            <div className="uk-width-1-1 uk-width-1-2@m">
                <Image fluid={introImg1} alt="intro1" />
            </div>
            <div className="uk-width-1-1 uk-width-1-2@m">
                <div className="uk-margin-large-bottom">
                    <h2>Über mich als Frontend Web-Entwickler...</h2>
                    <p className="color-nr3">
                        Ich bin seit 2013 als Webentwickler tätig, nachdem ich
                        mein Studium an der Fachhochschule Lübeck im Bereich
                        Informatik / Softwaretechnik abgeschlossen habe. In
                        dieser Zeit konnte ich bereits vielen Agenturen und
                        deren Kunden bei spannenden Projekten unterstützen.
                    </p>
                    <p className="color-nr3">
                        Durch regelmäßige Fortbildung bin ich in der Lage meinen
                        Kunden bzw. Agenturen Webseiten auf Basis der neuesten
                        Web-Technologien zu erstellen.
                    </p>
                    <a
                        className={IntroStyles.icon}
                        href="/about"
                        uk-icon="icon: arrow-right; ratio: 1.2">
                        Mehr Infos.
                    </a>
                </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@m">
                <h2>Entwicklung moderner Websites...</h2>
                <p className="color-nr3">
                    Moderne Websites features wie Single Page Application -SPA-,
                    Responsive Webdesign, SEO, und Mobile Optimierung habe ich
                    mich damit vertraut gemacht.
                </p>
                <p className="color-nr3">
                    Zu meinen Kompetenzen zählt zudem die Umsetzung dynamischer
                    Webseiten mit Hilfe moderner CMS wie Contao und Wordpress.
                    JavaScript-Frameworks wie React und Gatsby gehört noch dazu.
                </p>
                <a
                    className={IntroStyles.icon}
                    href="/portfolio"
                    uk-icon="icon: arrow-right; ratio: 1.2">
                    Letzte Projekte
                </a>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@m">
                <Image fluid={introImg2} alt="intro2" />
            </div>
        </div>
    )
}

export default Intro
