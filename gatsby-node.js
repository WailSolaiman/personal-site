exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /uikit/,
            use: loaders.null(),
          },
          {
            test: /leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
