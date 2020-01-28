import React from 'react'
import FooterBeforeStyles from '../styles/footer-before.module.scss'

const FooterBefore = ({
    title = '',
    text = '',
    btnLink = '',
    btnText = '',
}) => {
    return (
        <div className={FooterBeforeStyles.footerBefore}>
            <p className="uk-text-center uk-margin-small color-nr6">{text}</p>
            <h1 className={FooterBeforeStyles.footerBeforeHeader}>{title}</h1>
            {btnText !== '' ? (
                <a
                    className={`uk-button uk-button-default ${FooterBeforeStyles.footerBeforeButton}`}
                    href={btnLink}>
                    {btnText}
                </a>
            ) : (
                <span />
            )}
        </div>
    )
}

export default FooterBefore
