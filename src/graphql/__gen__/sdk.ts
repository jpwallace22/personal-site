import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export const ImageFragment = gql`
  fragment Image on FileField {
    __typename
    id
    alt
    blurhash
    height
    width
    url
  }
`
export const SiteLogoQuery = gql`
  query SiteLogo {
    _site {
      favicon {
        ...Image
      }
    }
  }
  ${ImageFragment}
`

/**
 * __useSiteLogoQuery__
 *
 * To run a query within a React component, call `useSiteLogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSiteLogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSiteLogoQuery({
 *   variables: {
 *   },
 * });
 */
export function useSiteLogoQuery(baseOptions?: Apollo.QueryHookOptions<SiteLogoQuery, SiteLogoQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SiteLogoQuery, SiteLogoQueryVariables>(SiteLogoQuery, options)
}
export function useSiteLogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SiteLogoQuery, SiteLogoQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SiteLogoQuery, SiteLogoQueryVariables>(SiteLogoQuery, options)
}
export type SiteLogoQueryHookResult = ReturnType<typeof useSiteLogoQuery>
export type SiteLogoLazyQueryHookResult = ReturnType<typeof useSiteLogoLazyQuery>
export type SiteLogoQueryResult = Apollo.QueryResult<SiteLogoQuery, SiteLogoQueryVariables>
