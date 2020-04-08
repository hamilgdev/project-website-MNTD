module.exports = {
  siteMetadata: {
    title: `Julián Duque - Delevoper and Educator`,
    titleShort: `Julián Duque - MNTD LLC`,
    description: `Hello, my name is Julián Duque, I'm from Medellín, Colombia 🇨🇴 but currently living in St. Petersburg, FL (Tampa Bay, FL) 🇺🇸.
    I'm a community leader, public speaker, JavaScript/Node.js evangelist, and an official Node.js collaborator. I work at NodeSource as a Solutions Architect and currently organizing JSConf and NodeConf Colombia, also helping organize Suncoast.js in St. Petersburg, FL, and MedellinJS, the largest JavaScript user group in Colombia with 4500+ registered members.`,
    author: `@fluxiongc`,
    image:
      "https://raw.githubusercontent.com/nodeconf/colombia/d5eaf4bba41a10a7a02f40ff28320207046c18a7/images/social.png",
    url: "https://julianduque.co/"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Julián Duque - Delevoper and Educator`,
        short_name: `Julián Duque`,
        start_url: `/`,
        background_color: `#2E6B41`,
        theme_color: `#2E6B41`,
        display: `minimal-ui`,
        icon: `` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://nodeconf.us18.list-manage.com/subscribe/post?u=33c93ca7e73c6c27cd0325b9f&amp;id=e71faec96c"
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`
        }
      }
    }
  ]
};
