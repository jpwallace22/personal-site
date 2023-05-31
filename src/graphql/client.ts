import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"
import { DATO_CMS_ENVIRONMENT, DATO_CMS_URI } from "@utils/constants"

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: DATO_CMS_URI,
      credentials: "same-origin",
      headers: {
        authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS}`,
        "X-Environment": DATO_CMS_ENVIRONMENT,
      },
    }),
  })
})
