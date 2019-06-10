module.exports = {
    siteMetadata: {
        title: 'Wail Solaiman - Frontend Web-Developer',
        author: 'Wail Solaiman',
        email: 'contact@wailsolaiman.com',
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-json`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'project',
                path: `${__dirname}/src/data`,
            },
        },
    ],
}
