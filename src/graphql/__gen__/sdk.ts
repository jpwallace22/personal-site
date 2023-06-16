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
export const SwitchbackFragment = gql`
  fragment Switchback on SwitchbackRecord {
    designAccent
    heading
    headingAs
    id
    reverse
    sectionId
    bgColor
    body {
      value
      links {
        ...Button
      }
    }
    image {
      ...Image
    }
  }
  ${ButtonFragment}
  ${ImageFragment}
`
export const ProjectCardFragment = gql`
  fragment ProjectCard on ProjectRecord {
    title
    subtitle
    slug
    excerpt {
      value
      links
    }
    techStack {
      title
      thumbnail {
        ...Image
      }
    }
    bannerImage {
      ...Image
    }
  }
  ${ImageFragment}
`
export const ProjectListingFragment = gql`
  fragment ProjectListing on ProjectListingRecord {
    id
    heading
    headingAs
    sectionId
    bgColor
    body {
      value
    }
    cards {
      ...ProjectCard
    }
  }
  ${ProjectCardFragment}
`
export const CompanyFragment = gql`
  fragment Company on CompanyRecord {
    name
    logo {
      ...Image
    }
    website
  }
  ${ImageFragment}
`
export const PersonFragment = gql`
  fragment Person on PersonRecord {
    firstName
    lastName
    role
    thumbnail {
      ...Image
    }
    company {
      ...Company
    }
    website
  }
  ${ImageFragment}
  ${CompanyFragment}
`
export const TestimonialCardFragment = gql`
  fragment TestimonialCard on TestimonialCardRecord {
    quote {
      value
    }
    person {
      ...Person
    }
  }
  ${PersonFragment}
`
export const CarouselFragment = gql`
  fragment Carousel on CarouselRecord {
    cards {
      ...TestimonialCard
    }
  }
  ${TestimonialCardFragment}
`
export const PageFragment = gql`
  fragment Page on TemplatePageRecord {
    id
    slug
    components {
      ...Switchback
      ...ProjectListing
      ...Carousel
    }
    seo {
      description
      title
      image {
        ...Image
      }
    }
  }
  ${SwitchbackFragment}
  ${ProjectListingFragment}
  ${CarouselFragment}
  ${ImageFragment}
`
export const SiteMetaDataQuery = gql`
  query SiteMetaData {
    _site {
      favicon {
        ...Image
      }
    }
  }
  ${ImageFragment}
`

/**
 * __useSiteMetaDataQuery__
 *
 * To run a query within a React component, call `useSiteMetaDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useSiteMetaDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSiteMetaDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useSiteMetaDataQuery(
  baseOptions?: Apollo.QueryHookOptions<SiteMetaDataQuery, SiteMetaDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SiteMetaDataQuery, SiteMetaDataQueryVariables>(SiteMetaDataQuery, options)
}
export function useSiteMetaDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SiteMetaDataQuery, SiteMetaDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SiteMetaDataQuery, SiteMetaDataQueryVariables>(
    SiteMetaDataQuery,
    options
  )
}
export type SiteMetaDataQueryHookResult = ReturnType<typeof useSiteMetaDataQuery>
export type SiteMetaDataLazyQueryHookResult = ReturnType<typeof useSiteMetaDataLazyQuery>
export type SiteMetaDataQueryResult = Apollo.QueryResult<
  SiteMetaDataQuery,
  SiteMetaDataQueryVariables
>
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
  return Apollo.useQuery<GlobalNavComponentQuery, GlobalNavComponentQueryVariables>(
    GlobalNavComponentQuery,
    options
  )
}
export function useGlobalNavComponentLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GlobalNavComponentQuery,
    GlobalNavComponentQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GlobalNavComponentQuery, GlobalNavComponentQueryVariables>(
    GlobalNavComponentQuery,
    options
  )
}
export type GlobalNavComponentQueryHookResult = ReturnType<typeof useGlobalNavComponentQuery>
export type GlobalNavComponentLazyQueryHookResult = ReturnType<
  typeof useGlobalNavComponentLazyQuery
>
export type GlobalNavComponentQueryResult = Apollo.QueryResult<
  GlobalNavComponentQuery,
  GlobalNavComponentQueryVariables
>
export const StpTestQuery = gql`
  query stpTest {
    blogPost(filter: { slug: { eq: "test" } }) {
      body {
        value
        links {
          ...Button
        }
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
  ${ButtonFragment}
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
export function useStpTestQuery(
  baseOptions?: Apollo.QueryHookOptions<StpTestQuery, StpTestQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<StpTestQuery, StpTestQueryVariables>(StpTestQuery, options)
}
export function useStpTestLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<StpTestQuery, StpTestQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<StpTestQuery, StpTestQueryVariables>(StpTestQuery, options)
}
export type StpTestQueryHookResult = ReturnType<typeof useStpTestQuery>
export type StpTestLazyQueryHookResult = ReturnType<typeof useStpTestLazyQuery>
export type StpTestQueryResult = Apollo.QueryResult<StpTestQuery, StpTestQueryVariables>
export const TemplatePageQuery = gql`
  query templatePage($slug: String) {
    templatePage(filter: { slug: { eq: $slug } }) {
      ...Page
    }
  }
  ${PageFragment}
`

/**
 * __useTemplatePageQuery__
 *
 * To run a query within a React component, call `useTemplatePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplatePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplatePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useTemplatePageQuery(
  baseOptions?: Apollo.QueryHookOptions<TemplatePageQuery, TemplatePageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TemplatePageQuery, TemplatePageQueryVariables>(TemplatePageQuery, options)
}
export function useTemplatePageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TemplatePageQuery, TemplatePageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TemplatePageQuery, TemplatePageQueryVariables>(
    TemplatePageQuery,
    options
  )
}
export type TemplatePageQueryHookResult = ReturnType<typeof useTemplatePageQuery>
export type TemplatePageLazyQueryHookResult = ReturnType<typeof useTemplatePageLazyQuery>
export type TemplatePageQueryResult = Apollo.QueryResult<
  TemplatePageQuery,
  TemplatePageQueryVariables
>
