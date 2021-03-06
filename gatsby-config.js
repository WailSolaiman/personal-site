module.exports = {
	siteMetadata: {
		title: 'Wail Solaiman',
		description: 'Wail Solaiman - Frontend Web-Developer Website',
		author: 'Wail Solaiman',
		email: 'wailsolaiman@hotmail.com',
		url: 'https://wailsolaiman.com',
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
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: [
						'Arizonia',
						'Roboto:400,700',
						'Montserrat:400,700',
						'Changa:400,700',
						'Tajawal:400,700',
					],
				},
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
							prettierOptions: {},
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
					failOnError: false,
				},
			},
		},
		{
			resolve: 'gatsby-source-graphql',
			options: {
				typeName: 'GraphCMS',
				fieldName: 'gcms',
				url:
					'https://api-euwest.graphcms.com/v1/ck74oo2id0iws01cyf8f0ch1w/master',
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-159951591-1',
			},
		},
	],
}
