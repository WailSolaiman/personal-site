import React from 'react'
// import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'

function ProjectPreview({ imageData, title, development }) {
    return (
        <li
            className="uk-width-1-3 uk-width-1-5@m"
            data-dev={`${development}`}>
            <div className="uk-card uk-card-default color-bg-nr2">
                <div className="uk-card-media-top">
                    <Image fluid={imageData} alt={title} />
                </div>
                {
                    // <div className="uk-card-body uk-card-small uk-padding">
                    //     <h4 className="uk-margin-remove uk-text-center color-nr6">
                    //         {state}
                    //     </h4>
                    // </div>
                }
            </div>
        </li>
    )
}

const Portfolio = ({ portfolios }) => {
    return (
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
                        JavaScript
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
                        <ProjectPreview
                            key={portfolio.id}
                            title={portfolio.title}
                            state={portfolio.state}
                            development={portfolio.development}
                            imageData={portfolio.image.childImageSharp.fluid}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default Portfolio
