import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

function ProjectPreview({ slug, imageData, title, description }) {
    return (
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    <Link to={`/${slug}/`}>
                        <Image fluid={imageData} alt={title} />
                    </Link>
                </div>
                <div className="uk-card-body uk-card-small">
                    <div className="uk-card-badge uk-label">Badge</div>
                    <h3 className="uk-card-title">
                        <Link to={`/${slug}/`}>{title}</Link>
                    </h3>
                    <p>{description}</p>
                    <Link to={`/${slug}/`}>View this project</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectPreview
