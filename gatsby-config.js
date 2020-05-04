module.exports = {
  siteMetadata: {
    title: `Julián Duque - Delevoper and Educator`,
    titleShort: `Julián Duque`,
    description: `Hello, my name is Julián Duque, I'm from Medellín, Colombia 🇨🇴 but currently living in St. Petersburg, FL (Tampa Bay, FL) 🇺🇸.
    I'm a community leader, public speaker, JavaScript/Node.js evangelist, and an official Node.js collaborator. I work at NodeSource as a Solutions Architect and currently organizing JSConf and NodeConf Colombia, also helping organize Suncoast.js in St. Petersburg, FL, and MedellinJS, the largest JavaScript user group in Colombia with 4500+ registered members.`,
    author: `@fluxiongc`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`
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
        icon: `src/assets/img/logo_mntd.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `${__dirname}/src/assets/svg/`
        }
      }
    }
  ]
};
