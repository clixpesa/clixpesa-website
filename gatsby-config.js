module.exports = {
  siteMetadata: {
    title: `Clixpesa`,
    description: `Making money and crypto simple for everyone`,
    author: `@kachdekan`,
    siteUrl: `https://clixpesa.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name: `content`,
        path: `${__dirname}/src/content`,
        name: `blogs`,
        path: `${__dirname}/src/blogs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logosq.svg`, // This path is relative to the root of the site.
      },
    },
  ],
}
