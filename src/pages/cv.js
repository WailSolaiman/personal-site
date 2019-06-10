import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import PersonalInfos from '../components/cv/personal-infos'
import Education from '../components/cv/education'
import Experience from '../components/cv/experience'
import Languages from '../components/cv/languages'
import Avatar from '../components/home/avatar'

const CV = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>Wail Solaiman</h1>
            <h2>Bachelor's Degree Of Software Engineering</h2>
            <Avatar />
            <PersonalInfos
                address="Dankwartsgrube 35, 23552 Lübeck, Deutschland"
                mobile="+49 176 77027452"
                email="contact@wailsolaiman.com"
                birthdate="08.06.1982"
                birthplace="Khartoum / Sudan"
            />
            <Education />
            <Experience />
            <Languages />
        </Layout>
    )
}

export default CV
