import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

function ProjectPreview({ slug, imageData, title, description }) {
    return (
        <div>
            <Link to={`/${slug}/`}>
                <Image fluid={imageData} alt={title} />
            </Link>
            <h2>
                <Link to={`/${slug}/`}>{title}</Link>
            </h2>
            <p>{description}</p>
            <Link to={`/${slug}/`}>View this project</Link>
        </div>
    )
}

export default ProjectPreview
