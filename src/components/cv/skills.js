import React from 'react'

const Skills = () => {
  return (
    <>
      <div>
        <h3 className="uk-heading-small">Skills</h3>
        <div uk-grid="">
          <div className="uk-width-1-1 uk-width-1-2@m">
            <dl className="uk-description-list uk-description-list-divider">
              <dt>Core</dt>
              <dd>HTML5. CSS3. JavaScript.</dd>
              <dt>Text Editor</dt>
              <dd>Visual Studio Code.</dd>
              <dt>UI/CSS Framework</dt>
              <dd>Bootstrap. UIkit. Ant Design.</dd>
              <dt>CSS Preprocessor</dt>
              <dd>SASS.</dd>
              <dt>Version Control</dt>
              <dd>Git.</dd>
              <dt>Package Manager</dt>
              <dd>Npm. Bower.</dd>
              <dt>JavaScript Frameworks</dt>
              <dd>React. jQuery. Gatsby.js. Redux.</dd>
              <dt>JavaScript Preprocessor</dt>
              <dd>BABEL.</dd>
            </dl>
          </div>
          <div className="uk-width-1-1 uk-width-1-2@m">
            <dl className="uk-description-list uk-description-list-divider">
              <dt>JavaScript code analysis tool (code Quality)</dt>
              <dd>ESLint.</dd>
              <dt>JavaScript module bundler</dt>
              <dd>Webpack.</dd>
              <dt>Web app. framework for Node.js</dt>
              <dd>Express.</dd>
              <dt>JavaScript server environment</dt>
              <dd>Node.js.</dd>
              <dt>Content management system (CMS)</dt>
              <dd>WordPress. Contao.</dd>
              <dt>Relational database management system</dt>
              <dd>MySql.</dd>
              <dt>Document-oriented database management system</dt>
              <dd>MongoDB. Firebase.</dd>
              <dt>UI/UX-Design Apps</dt>
              <dd>Adobe XD. Figma.</dd>
            </dl>
          </div>
        </div>
      </div>
      <div>
        <h3 className="uk-heading-small uk-margin-medium-top">
          Learning process
        </h3>
        <div uk-grid="">
          <div className="uk-width-1-1 uk-width-1-2@m">
            <dl className="uk-description-list uk-description-list-divider">
              <dt>JavaScript testing framework</dt>
              <dd>Jest.</dd>
              <dt>Mobile application framework</dt>
              <dd>React Native.</dd>
            </dl>
          </div>
          <div className="uk-width-1-1 uk-width-1-2@m">
            <dl className="uk-description-list uk-description-list-divider">
              <dt>eCommerce platform</dt>
              <dd>Magento.</dd>
              <dt>Server rendering React framework (SSR)</dt>
              <dd>Next.js.</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skills
