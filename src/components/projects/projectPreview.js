import React from 'react'
import Image from 'gatsby-image'
import ProjectPreviewStyles from '../../styles/project-preview.module.scss'

const ProjectPreview = ({
	imageData,
	title = '',
	development = '',
	url = '',
	agency = '',
	description = [],
	state2 = '',
}) => {
	return (
		<li
			className="uk-width-1-1 uk-width-1-2@s uk-width-1-3@m uk-width-1-4@xl"
			data-dev={`${development}`}>
			<div className="uk-transition-toggle" style={{ position: 'relative' }}>
				<Image fluid={imageData} alt={title} />
				<div
					className={`uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary ${ProjectPreviewStyles.overlay}`}>
					<div className="projects__container">
						<p className="projects__title">{title}</p>
						<p className="projects__agency">Agency: {agency}</p>
						<p
							className={
								state2 === 'Online'
									? 'uk-text-success uk-margin-remove projects__state'
									: 'uk-text-danger uk-margin-remove projects__state'
							}>
							{state2}
						</p>
						<div className="projects__tech">
							<p className="projects__tech__header">Web technologies:</p>
							<div className="projects__tech__list">
								{description.map((item, index) => {
									return (
										<p key={index} className="projects__tech__item">
											{item.tool}
										</p>
									)
								})}
							</div>
						</div>
						<a href={url} target="blank" className="projects__link">
							View project online
						</a>
					</div>
				</div>
			</div>
		</li>
	)
}

export default ProjectPreview
