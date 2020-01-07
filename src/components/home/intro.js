import React from 'react'

const Intro = () => {
    return (
        <div uk-grid="">
            <div className="uk-width-1-1">
                <h1 className="uk-text-bold uk-text-center uk-margin-small-bottom color-nr4">
                    Webentwickler gesucht?
                </h1>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@m">
                <p className="color-nr3">
                    Mein Name ist Wail. Ich bin seit 2013 als Webentwickler
                    tätig. In dieser Zeit konnte ich bereits vielen Agenturen und
                    deren Kunden bei spannenden Projekten unterstützen. Durch
                    regelmäßige Fortbildung bin ich in der Lage meinen Kunden bzw.
                    Agenturen Webseiten auf Basis der neuesten Webtechnologien zu
                    erstellen. Dazu gehören Frontend-Technologien wie HTML5, CSS3, SASS,
                    Javascript-Bibliotheken wie jQuery, und Techniken wie Responsive
                    Webdesign.
                </p>
            </div>
            <div className="uk-width-1-1 uk-width-1-2@m">
                <p className="color-nr3">
                    Serverseitig programmiere ich Webapplikationen mit
                    MERN-Stack (React - MongoDB - Express - Node.js) nach
                    MVC-Standards mit dem Framework React. Zu meinen Kompetenzen
                    zählt zudem die Umsetzung dynamischer Webseiten mit Hilfe
                    moderner Content Management Systeme wie Contao und Wordpress.
                </p>
            </div>
        </div>
    )
}

export default Intro
