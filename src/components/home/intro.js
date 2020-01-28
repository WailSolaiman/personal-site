import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import IntroStyles from '../../styles/intro.module.scss'

const Intro = () => {
    const data = useStaticQuery(graphql`
        {
            file(relativePath: { eq: "images/home/img3.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const imageData = data.file.childImageSharp.fluid
    return (
        <>
            <div className="uk-child-width-expand@s" uk-grid="">
                <div>
                    <Image fluid={imageData} alt="header" />
                </div>
                <div>
                    <h2>Lorem ipsum dolor...</h2>
                    <p className="color-nr3">
                        Ich bin seit 2013 als Webentwickler tätig. In dieser
                        Zeit konnte ich bereits vielen Agenturen und deren
                        Kunden bei spannenden Projekten unterstützen. Durch
                        regelmäßige Fortbildung bin ich in der Lage meinen
                        Kunden bzw. Agenturen Webseiten auf Basis der neuesten
                        Web-Technologien zu erstellen.
                    </p>
                    <a
                        className={IntroStyles.icon}
                        href="/cv"
                        uk-icon="icon: arrow-right; ratio: 1.2">
                        Check out the functions
                    </a>
                </div>
            </div>
            <div className="uk-child-width-expand@s" uk-grid="">
                <div>
                    <h2>Lorem ipsum dolor...</h2>
                    <p className="color-nr3">
                        Moderne Websites features wie Single Page Application
                        -SPA-, Responsive Webdesign, SEO, und Mobile Optimierung
                        habe ich mich damit vertraut gemacht. Zu meinen
                        Kompetenzen zählt zudem die Umsetzung dynamischer
                        Webseiten mit Hilfe moderner CMS wie Contao und
                        Wordpress.
                    </p>
                    <a
                        className={IntroStyles.icon}
                        href="/cv"
                        uk-icon="icon: arrow-right; ratio: 1.2">
                        Check out the functions
                    </a>
                </div>
                <div>
                    <Image fluid={imageData} alt="header" />
                </div>
            </div>
        </>
    )
}

export default Intro
