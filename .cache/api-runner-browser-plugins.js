module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-web-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"google":{"families":["Arizonia","Roboto:400,700","Montserrat:400,700","Changa:400,700","Tajawal:400,700"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-159951591-1"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
