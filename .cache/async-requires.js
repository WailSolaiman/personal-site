// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-contact-js": () => import("./../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-data-privacy-js": () => import("./../src/pages/dataPrivacy.js" /* webpackChunkName: "component---src-pages-data-privacy-js" */),
  "component---src-pages-imprint-js": () => import("./../src/pages/imprint.js" /* webpackChunkName: "component---src-pages-imprint-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-projects-js": () => import("./../src/pages/projects.js" /* webpackChunkName: "component---src-pages-projects-js" */),
  "component---src-pages-success-js": () => import("./../src/pages/success.js" /* webpackChunkName: "component---src-pages-success-js" */)
}

