const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\contact.js"))),
  "component---src-pages-data-privacy-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\dataPrivacy.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\projects.js"))),
  "component---src-pages-success-js": hot(preferDefault(require("C:\\Users\\wails\\Desktop\\apps\\personal-site\\src\\pages\\success.js")))
}

