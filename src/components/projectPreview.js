import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'

function ProjectPreview({ slug, imageData, title }) {
    return (
        <div className="uk-width-1-3">
            <AniLink fade to={`/${slug}/`}>
                <div className="uk-card uk-card-default color-bg-nr2">
                    <div className="uk-card-media-top">
                        <Image fluid={imageData} alt={title} />
                    </div>
                    <div className="uk-card-body uk-card-small uk-padding">
                        <h4 className="uk-margin-remove uk-text-bold color-nr6">
                            {title}
                        </h4>
                    </div>
                </div>
            </AniLink>
        </div>
    )
}

export default ProjectPreview
