import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `SAIB Website`,
    siteUrl: `https://saib.dev/`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          "poppins:100,200,300,400,500,600,700,800,900:latin,latin-ext", 
        ],
        display: "swap",
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "SAIB Inc.",
        short_name: "SAIB Inc.",
        start_url: "/",
        display: "standalone",
        icon: "src/images/saib-icon.svg",
        crossOrigin: `use-credentials`,
      },
    }
  ]
};

export default config;
