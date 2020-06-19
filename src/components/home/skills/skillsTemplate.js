import React from 'react'
import Flickity from 'react-flickity-component'
import SkillsStyles from '../../../styles/skills-home.module.scss'

const SkillsTemplate = ({ skills }) => {
	const flickityOptions = {
		freeScroll: true,
		wrapAround: true,
		draggable: false,
		autoPlay: 2000,
		pauseAutoPlayOnHover: false,
	}
	return (
		<Flickity
			className="carousel"
			elementType="div"
			options={flickityOptions}
			disableImagesLoaded={false}
			reloadOnUpdate
			static>
			{skills.map((skill, index) => {
				return (
					<div className={SkillsStyles.carouselCell} key={index}>
						<i className={`${skill.icon} colored ${SkillsStyles.icon}`} />
					</div>
				)
			})}
		</Flickity>
	)
}

export default SkillsTemplate
