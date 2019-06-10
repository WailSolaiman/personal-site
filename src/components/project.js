import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Project = ({ imageData, title, description, url }) => {
    return (
        <div>
            <h1>{title}</h1>
            <Image fluid={imageData} alt={title} />
            <p>{description}</p>
            <a href={url} target="blank">
                View this project online
            </a>
            <Link to="/projects">Back to all projects</Link>
        </div>
    )
}

export default Project
