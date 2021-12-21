// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Matthew Siefert',
  siteDescription: "...",
  siteUrl: 'https://bradsiefert.com',
  titleTemplate: `Matthew Siefert / %s`,
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: './content/blog/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Portfolio',
        path: './content/portfolio/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'SiriShortcuts',
        path: './content/siri-shortcuts/**/*.md',
      }
    },
  ],
}
