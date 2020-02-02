import React from 'react'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import '../../styles/portfolio.scss'

function PortfolioPreview({ imageData, title, development, agency }) {
    return (
        <li className="uk-width-1-3 uk-width-1-5@m" data-dev={`${development}`}>
            <div className="uk-transition-toggle">
                <Image fluid={imageData} alt={title} />
                <div className="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-column uk-flex-center uk-flex-middle">
                    <p className="portfolio__title">{title}</p>
                    <p className="portfolio__agency">{agency}</p>
                </div>
            </div>
        </li>
    )
}

const Portfolio = ({ portfolios }) => {
    return (
        <div className="portfolio">
            <h2>Eine kleine Auswahl meiner Arbeit...</h2>
            <div uk-filter="target: .js-filter" style={{ minHeight: 700 }}>
                <ul className="uk-subnav uk-subnav-pill">
                    <li className="uk-active" uk-filter-control="">
                        <button
                            className="uk-button uk-button-default"
                            type="button">
                            All
                        </button>
                    </li>
                    <li uk-filter-control="[data-dev='React']">
                        <button
                            className="uk-button uk-button-default"
                            type="button">
                            React
                        </button>
                    </li>
                    <li uk-filter-control="[data-dev='WordPress']">
                        <button
                            className="uk-button uk-button-default"
                            type="button">
                            Wordpress
                        </button>
                    </li>
                    <li uk-filter-control="[data-dev='JavaScript']">
                        <button
                            className="uk-button uk-button-default"
                            type="button">
                            Vanilla JS
                        </button>
                    </li>
                    <li uk-filter-control="[data-dev='Contao']">
                        <button
                            className="uk-button uk-button-default"
                            type="button">
                            Contao
                        </button>
                    </li>
                </ul>
                <ul
                    className="js-filter uk-grid-collapse"
                    style={{ listStyle: 'none', padding: 0 }}
                    uk-grid="masonry: true">
                    {portfolios.map(({ node: portfolio }) => {
                        return (
                            <PortfolioPreview
                                key={portfolio.id}
                                title={portfolio.title}
                                agency={portfolio.agency}
                                development={portfolio.development}
                                imageData={
                                    portfolio.image.childImageSharp.fluid
                                }
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Portfolio
