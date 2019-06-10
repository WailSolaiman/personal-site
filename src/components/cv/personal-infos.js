import React from 'react'

const PersonalInfos = ({ address, email, mobile, birthdate, birthplace }) => {
    return (
        <div>
            <h2>Persönliche Daten</h2>
            <p>Handy Nr.: {mobile}</p>
            <p>E-Mail: {email}</p>
            <p>Geburtsdatum: {birthdate}</p>
            <p>Geburtsort: {birthplace}</p>
            <p>Wohnort: {address}</p>
        </div>
    )
}

export default PersonalInfos
