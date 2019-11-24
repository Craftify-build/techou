const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  siteMetadata: {
    title: `Craftify`,
    authors: [
      {
        id: 'pun',
        name: 'Wasin Watthanasrisong (Pun)',
        description: 'The Devops Guy',
        profilePicture: 'wasin.jpg'
      },
      {
        id: 'boss',
        name: 'Supanat Potiwarakorn (Boss)',
        description: 'The Whatever',
        profilePicture: 'supanat.jpg'
      },
    ],
    description: `Craftify Blog`,
    siteUrl: `https://craftify.io/`,
    social: {
      twitter: '',
    },
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Craftify Blog`,
        short_name: `Craftify Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `content/assets/circle.svg`,
      },
    },
    ... (isProd ? [{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID || '',
      },
    }] : []),
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}
