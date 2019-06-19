import React from 'react'

const PersonalInfos = ({ address, email, mobile, birthdate, birthplace }) => {
    return (
        <div>
            <h2 className="uk-margin-small-top uk-text-bold">
                Persönliche Daten
            </h2>
            <p className="uk-margin-remove-bottom">
                <span className="uk-text-bold">Handy Nr.:</span> {mobile}
            </p>
            <p className="uk-margin-remove">
                <span className="uk-text-bold">E-Mail: </span>
                <a href="mailto: contact@wailsolaiman.com">{email}</a>
            </p>
            <p className="uk-margin-remove">
                <span className="uk-text-bold">Geburtsdatum:</span> {birthdate}
            </p>
            <p className="uk-margin-remove">
                <span className="uk-text-bold">Geburtsort:</span> {birthplace}
            </p>
            <p className="uk-margin-remove-top">
                <span className="uk-text-bold">Wohnort:</span> {address}
            </p>
        </div>
    )
}

export default PersonalInfos
