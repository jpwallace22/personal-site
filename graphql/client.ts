import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"

const DATO_CMS_URI = "https://graphql.datocms.com"
const DATO_CMS_ENVIRONMENT = "new"

const httpLink = new HttpLink({
  uri: DATO_CMS_URI,
  credentials: "same-origin",
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS}`,
    "X-Environment": DATO_CMS_ENVIRONMENT,
  },
})

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  })
})
