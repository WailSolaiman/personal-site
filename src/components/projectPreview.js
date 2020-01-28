import React from 'react'
import Image from 'gatsby-image'

function ProjectPreview({ imageData, title, development }) {
    return (
        <li
            className="uk-width-1-1 uk-width-1-2@m uk-width-1-4@xl"
            data-dev={`${development}`}>
            <div className="uk-card uk-card-default color-bg-nr2">
                <div className="uk-card-media-top">
                    <Image fluid={imageData} alt={title} />
                </div>
                {
                    // <div className="uk-card-body uk-card-small uk-padding">
                    //     <h4 className="uk-margin-remove uk-text-center color-nr6">
                    //         {title}
                    //     </h4>
                    // </div>
                }
            </div>
        </li>
    )
}

export default ProjectPreview
