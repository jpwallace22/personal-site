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
export const CategoryFragment = gql`
  fragment Category on CategoryRecord {
    name
    slug
  }
`
export const ImageFragment = gql`
  fragment Image on FileField {
    id
    alt
    blurhash
    height
    width
    url
  }
`
export const BlogFragment = gql`
  fragment Blog on TemplateBlogPostRecord {
    id
    internalName
    title
    subtitle
    publishDate
    categories {
      ...Category
    }
    slug
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
    featuredImage {
      ...Image
    }
  }
  ${CategoryFragment}
  ${ButtonFragment}
  ${ImageFragment}
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
export const TechStackFragment = gql`
  fragment TechStack on TechStackRecord {
    id
    title
    thumbnail {
      ...Image
    }
  }
  ${ImageFragment}
`
export const ProjectCardFragment = gql`
  fragment ProjectCard on TemplateProjectRecord {
    title
    subtitle
    slug
    excerpt {
      value
      links
    }
    techStack {
      ...TechStack
    }
    bannerImage {
      ...Image
    }
  }
  ${TechStackFragment}
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
    id
    cards {
      ...TestimonialCard
    }
  }
  ${TestimonialCardFragment}
`
export const ScrollingSwitchbackFragment = gql`
  fragment ScrollingSwitchback on ScrollingSwitchbackRecord {
    id
    heading
    body {
      value
    }
    switchbacks {
      ...Switchback
    }
  }
  ${SwitchbackFragment}
`
export const BlogCardFragment = gql`
  fragment BlogCard on TemplateBlogPostRecord {
    id
    internalName
    title
    publishDate
    slug
    body {
      value
    }
    featuredImage {
      ...Image
    }
    excerpt {
      value
    }
  }
  ${ImageFragment}
`
export const BlogListingFragment = gql`
  fragment BlogListing on BlogListingRecord {
    id
    heading
    headingAs
    eyebrow
    body {
      value
    }
    cards {
      ...BlogCard
    }
  }
  ${BlogCardFragment}
`
export const SingleUseComponentFragment = gql`
  fragment SingleUseComponent on SingleUseComponentRecord {
    id
    componentName
  }
`
export const FeatureCardFragment = gql`
  fragment FeatureCard on FeatureHighlightCardRecord {
    id
    heading
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
export const FeatureHighlightFragment = gql`
  fragment FeatureHighlight on FeatureHighlightRecord {
    id
    heading
    eyebrow
    body {
      value
      links {
        ...Button
      }
    }
    cards {
      ...FeatureCard
    }
  }
  ${ButtonFragment}
  ${FeatureCardFragment}
`
export const PageFragment = gql`
  fragment Page on TemplatePageRecord {
    id
    slug
    components {
      ...Switchback
      ...ProjectListing
      ...Carousel
      ...ScrollingSwitchback
      ...BlogListing
      ...SingleUseComponent
      ...FeatureHighlight
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
  ${ScrollingSwitchbackFragment}
  ${BlogListingFragment}
  ${SingleUseComponentFragment}
  ${FeatureHighlightFragment}
  ${ImageFragment}
`
export const ProjectFragment = gql`
  fragment Project on TemplateProjectRecord {
    id
    slug
    title
    subtitle
    heading
    body {
      value
      links {
        ...Button
      }
    }
    extraInformation {
      value
      links {
        ...Button
      }
    }
    bannerImage {
      ...Image
    }
    techStack {
      ...TechStack
    }
    switchbacks {
      ...ScrollingSwitchback
    }
  }
  ${ButtonFragment}
  ${ImageFragment}
  ${TechStackFragment}
  ${ScrollingSwitchbackFragment}
`
export const AllBlogCardsQuery = gql`
  query AllBlogCards {
    allTemplateBlogPosts(orderBy: publishDate_DESC) {
      ...BlogCard
    }
  }
  ${BlogCardFragment}
`

/**
 * __useAllBlogCardsQuery__
 *
 * To run a query within a React component, call `useAllBlogCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBlogCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBlogCardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBlogCardsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllBlogCardsQuery, AllBlogCardsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllBlogCardsQuery, AllBlogCardsQueryVariables>(AllBlogCardsQuery, options)
}
export function useAllBlogCardsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllBlogCardsQuery, AllBlogCardsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllBlogCardsQuery, AllBlogCardsQueryVariables>(
    AllBlogCardsQuery,
    options
  )
}
export type AllBlogCardsQueryHookResult = ReturnType<typeof useAllBlogCardsQuery>
export type AllBlogCardsLazyQueryHookResult = ReturnType<typeof useAllBlogCardsLazyQuery>
export type AllBlogCardsQueryResult = Apollo.QueryResult<
  AllBlogCardsQuery,
  AllBlogCardsQueryVariables
>
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
    templateBlogPost(filter: { slug: { eq: "test" } }) {
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
export const TemplateBlogPostQuery = gql`
  query TemplateBlogPost($slug: String!) {
    templateBlogPost(filter: { slug: { eq: $slug } }) {
      ...Blog
    }
  }
  ${BlogFragment}
`

/**
 * __useTemplateBlogPostQuery__
 *
 * To run a query within a React component, call `useTemplateBlogPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useTemplateBlogPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTemplateBlogPostQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useTemplateBlogPostQuery(
  baseOptions: Apollo.QueryHookOptions<TemplateBlogPostQuery, TemplateBlogPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TemplateBlogPostQuery, TemplateBlogPostQueryVariables>(
    TemplateBlogPostQuery,
    options
  )
}
export function useTemplateBlogPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TemplateBlogPostQuery, TemplateBlogPostQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TemplateBlogPostQuery, TemplateBlogPostQueryVariables>(
    TemplateBlogPostQuery,
    options
  )
}
export type TemplateBlogPostQueryHookResult = ReturnType<typeof useTemplateBlogPostQuery>
export type TemplateBlogPostLazyQueryHookResult = ReturnType<typeof useTemplateBlogPostLazyQuery>
export type TemplateBlogPostQueryResult = Apollo.QueryResult<
  TemplateBlogPostQuery,
  TemplateBlogPostQueryVariables
>
export const AllBlogPostSlugsQuery = gql`
  query AllBlogPostSlugs {
    allTemplateBlogPosts {
      slug
    }
  }
`

/**
 * __useAllBlogPostSlugsQuery__
 *
 * To run a query within a React component, call `useAllBlogPostSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBlogPostSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBlogPostSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBlogPostSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllBlogPostSlugsQuery, AllBlogPostSlugsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllBlogPostSlugsQuery, AllBlogPostSlugsQueryVariables>(
    AllBlogPostSlugsQuery,
    options
  )
}
export function useAllBlogPostSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllBlogPostSlugsQuery, AllBlogPostSlugsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllBlogPostSlugsQuery, AllBlogPostSlugsQueryVariables>(
    AllBlogPostSlugsQuery,
    options
  )
}
export type AllBlogPostSlugsQueryHookResult = ReturnType<typeof useAllBlogPostSlugsQuery>
export type AllBlogPostSlugsLazyQueryHookResult = ReturnType<typeof useAllBlogPostSlugsLazyQuery>
export type AllBlogPostSlugsQueryResult = Apollo.QueryResult<
  AllBlogPostSlugsQuery,
  AllBlogPostSlugsQueryVariables
>
export const BlogMetaDataQuery = gql`
  query BlogMetaData($slug: String!) {
    blogMetaData: templateBlogPost(filter: { slug: { eq: $slug } }) {
      id
      title
      publishDate
      seo {
        description
        title
        image {
          ...Image
        }
      }
    }
  }
  ${ImageFragment}
`

/**
 * __useBlogMetaDataQuery__
 *
 * To run a query within a React component, call `useBlogMetaDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogMetaDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogMetaDataQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useBlogMetaDataQuery(
  baseOptions: Apollo.QueryHookOptions<BlogMetaDataQuery, BlogMetaDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BlogMetaDataQuery, BlogMetaDataQueryVariables>(BlogMetaDataQuery, options)
}
export function useBlogMetaDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlogMetaDataQuery, BlogMetaDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BlogMetaDataQuery, BlogMetaDataQueryVariables>(
    BlogMetaDataQuery,
    options
  )
}
export type BlogMetaDataQueryHookResult = ReturnType<typeof useBlogMetaDataQuery>
export type BlogMetaDataLazyQueryHookResult = ReturnType<typeof useBlogMetaDataLazyQuery>
export type BlogMetaDataQueryResult = Apollo.QueryResult<
  BlogMetaDataQuery,
  BlogMetaDataQueryVariables
>
export const AllTemplatePageSlugsQuery = gql`
  query AllTemplatePageSlugs {
    allTemplatePages {
      slug
    }
  }
`

/**
 * __useAllTemplatePageSlugsQuery__
 *
 * To run a query within a React component, call `useAllTemplatePageSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTemplatePageSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTemplatePageSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTemplatePageSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllTemplatePageSlugsQuery,
    AllTemplatePageSlugsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllTemplatePageSlugsQuery, AllTemplatePageSlugsQueryVariables>(
    AllTemplatePageSlugsQuery,
    options
  )
}
export function useAllTemplatePageSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllTemplatePageSlugsQuery,
    AllTemplatePageSlugsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllTemplatePageSlugsQuery, AllTemplatePageSlugsQueryVariables>(
    AllTemplatePageSlugsQuery,
    options
  )
}
export type AllTemplatePageSlugsQueryHookResult = ReturnType<typeof useAllTemplatePageSlugsQuery>
export type AllTemplatePageSlugsLazyQueryHookResult = ReturnType<
  typeof useAllTemplatePageSlugsLazyQuery
>
export type AllTemplatePageSlugsQueryResult = Apollo.QueryResult<
  AllTemplatePageSlugsQuery,
  AllTemplatePageSlugsQueryVariables
>
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
export const AllProjectSlugsQuery = gql`
  query AllProjectSlugs {
    allTemplateProjects {
      slug
    }
  }
`

/**
 * __useAllProjectSlugsQuery__
 *
 * To run a query within a React component, call `useAllProjectSlugsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectSlugsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectSlugsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjectSlugsQuery(
  baseOptions?: Apollo.QueryHookOptions<AllProjectSlugsQuery, AllProjectSlugsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllProjectSlugsQuery, AllProjectSlugsQueryVariables>(
    AllProjectSlugsQuery,
    options
  )
}
export function useAllProjectSlugsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AllProjectSlugsQuery, AllProjectSlugsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllProjectSlugsQuery, AllProjectSlugsQueryVariables>(
    AllProjectSlugsQuery,
    options
  )
}
export type AllProjectSlugsQueryHookResult = ReturnType<typeof useAllProjectSlugsQuery>
export type AllProjectSlugsLazyQueryHookResult = ReturnType<typeof useAllProjectSlugsLazyQuery>
export type AllProjectSlugsQueryResult = Apollo.QueryResult<
  AllProjectSlugsQuery,
  AllProjectSlugsQueryVariables
>
export const ProjectPageQuery = gql`
  query ProjectPage($slug: String!) {
    templateProject(filter: { slug: { eq: $slug } }) {
      ...Project
    }
    templatePage(filter: { slug: { eq: "home" } }) {
      components {
        ...ProjectListing
      }
    }
  }
  ${ProjectFragment}
  ${ProjectListingFragment}
`

/**
 * __useProjectPageQuery__
 *
 * To run a query within a React component, call `useProjectPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectPageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProjectPageQuery(
  baseOptions: Apollo.QueryHookOptions<ProjectPageQuery, ProjectPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ProjectPageQuery, ProjectPageQueryVariables>(ProjectPageQuery, options)
}
export function useProjectPageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProjectPageQuery, ProjectPageQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<ProjectPageQuery, ProjectPageQueryVariables>(ProjectPageQuery, options)
}
export type ProjectPageQueryHookResult = ReturnType<typeof useProjectPageQuery>
export type ProjectPageLazyQueryHookResult = ReturnType<typeof useProjectPageLazyQuery>
export type ProjectPageQueryResult = Apollo.QueryResult<ProjectPageQuery, ProjectPageQueryVariables>
