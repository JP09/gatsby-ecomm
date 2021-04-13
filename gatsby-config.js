require("dotenv").config({
  path: ".env.${process.env.NODE_ENV}"
})

module.exports = {
  siteMetadata: {
    title: "Test Website",
    description: "Test E-Comm Web App",
    author: "JP",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "test-website",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-stripe",
      options: {
          objects: ["Price"],
          secretKey: process.env.GATSBY_STRIPE_SECRET_KEY,
          downloadFiles: false, 
      },
    },
  ],
};
