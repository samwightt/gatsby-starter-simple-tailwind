module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Simple Tailwind`,
    description: `This is a simple Gatsby starter that uses Tailwind, Typescript, and a few other QOL tools.`,
    author: `@samwightt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-simple-tailwind`,
        short_name: `simple-tailwind`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // Uncomment the line below if you'd like an icon.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,

    // Uncomment the lines below to enable image support.
    // Make sure to add a directory for images.
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
