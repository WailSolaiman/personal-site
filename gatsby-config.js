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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prettier`,
                        options: {
                            usePrettierrc: true,
                            prettierOptions: {}
                        },
                    },
                ],
            },
        },
        {
        resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false
                }
            }
        }
    ],
}
