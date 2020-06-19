import React from 'react'

const aboutMe = ({
	aboutMeHeader = '',
	aboutMeFirstParagraph = '',
	aboutMeSecondParagraph = '',
}) => {
	return (
		<>
			<h3 className="uk-heading-small">{aboutMeHeader}</h3>
			<p>{aboutMeFirstParagraph}</p>
			<p>{aboutMeSecondParagraph}</p>
		</>
	)
}

export default aboutMe
