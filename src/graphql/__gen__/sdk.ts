import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
const defaultOptions = {} as const
export const ButtonFragment = gql`
  fragment Button on ButtonRecord {
    id
    variant
    label
    url
    disabled
    startIcon
    endIcon
  }
`
export const GlobalNavFragment = gql`
  fragment GlobalNav on GlobalNavRecord {
    id
    links {
      ...Button
    }
  }
  ${ButtonFragment}
`
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
export const GlobalNavComponentQuery = gql`
  query GlobalNavComponent {
    _site {
      favicon {
        ...Image
      }
    }
    globalNav {
      ...GlobalNav
    }
  }
  ${ImageFragment}
  ${GlobalNavFragment}
`

/**
 * __useGlobalNavComponentQuery__
 *
 * To run a query within a React component, call `useGlobalNavComponentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalNavComponentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalNavComponentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalNavComponentQuery(
  baseOptions?: Apollo.QueryHookOptions<GlobalNavComponentQuery, GlobalNavComponentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GlobalNavComponentQuery, GlobalNavComponentQueryVariables>(GlobalNavComponentQuery, options)
}
export function useGlobalNavComponentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GlobalNavComponentQuery, GlobalNavComponentQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GlobalNavComponentQuery, GlobalNavComponentQueryVariables>(
    GlobalNavComponentQuery,
    options
  )
}
export type GlobalNavComponentQueryHookResult = ReturnType<typeof useGlobalNavComponentQuery>
export type GlobalNavComponentLazyQueryHookResult = ReturnType<typeof useGlobalNavComponentLazyQuery>
export type GlobalNavComponentQueryResult = Apollo.QueryResult<
  GlobalNavComponentQuery,
  GlobalNavComponentQueryVariables
>
export const StpTestQuery = gql`
  query stpTest {
    blogPost(filter: { slug: { eq: "test" } }) {
      body {
        value
        blocks {
          id
          media {
            title
            __typename
            id
            alt
            blurhash
            height
            width
            url
          }
        }
      }
    }
  }
`

/**
 * __useStpTestQuery__
 *
 * To run a query within a React component, call `useStpTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useStpTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStpTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useStpTestQuery(baseOptions?: Apollo.QueryHookOptions<StpTestQuery, StpTestQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StpTestQuery, StpTestQueryVariables>(StpTestQuery, options)
}
export function useStpTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StpTestQuery, StpTestQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StpTestQuery, StpTestQueryVariables>(StpTestQuery, options)
}
export type StpTestQueryHookResult = ReturnType<typeof useStpTestQuery>
export type StpTestLazyQueryHookResult = ReturnType<typeof useStpTestLazyQuery>
export type StpTestQueryResult = Apollo.QueryResult<StpTestQuery, StpTestQueryVariables>
