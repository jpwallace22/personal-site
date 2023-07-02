// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config({ path: ".env.local" })

/** @type {import('graphql-config').IGraphQLConfig} */

module.exports = {
  schema: [
    {
      "https://graphql.datocms.com": {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS}`,
          "X-Exclude-Invalid": "true",
        },
      },
    },
  ],
  documents: ["./{app,src}/**/*.{ts,tsx,gql}"],
}
