module.exports = {
  siteMetadata: {
    title: 'Needlenoses and Bubblebooties',
    description: 'a sighthound information site',
    siteUrl: `https://needlenoses.netlify.com/`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-sharp',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Needlenoses and Bubblebooties',
        short_name: 'Needlenoses',
        start_url: '/',
        background_color: '#4e1162',
        theme_color: '#4e1162',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-netlify`,
  ],
};
