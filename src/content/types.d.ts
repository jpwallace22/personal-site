/**
 * Content record shapes for the site.
 *
 * Ported verbatim from the graphql-codegen output (src/graphql/__gen__/types.d.ts)
 * so the ~29 type references across the app keep resolving to identical shapes.
 * Now hand-maintained: edit alongside src/content/data/*.json.
 *
 * The generated *QueryVariables types were dropped -- they referenced Exact<> and
 * Scalars[], which this codegen config never emitted; only skipLibCheck:true kept
 * that from erroring.
 */
declare global {
  export type BlogCardFragment = {
    __typename?: "TemplateBlogPostRecord"
    id: string
    internalName?: string | null
    title?: string | null
    publishDate?: string | null
    slug?: string | null
    minutesToRead?: number | null
    featuredImage?: ({ __typename?: "FileField" } & ImageFragment) | null
    excerpt?: string | null
  }

  export type BlogListingFragment = {
    __typename?: "BlogListingRecord"
    id: string
    heading?: string | null
    headingAs?: string | null
    eyebrow?: string | null
    body?: string | null
    cards: Array<{ __typename?: "TemplateBlogPostRecord" } & BlogCardFragment>
  }

  export type AllBlogCardsQuery = {
    __typename?: "Query"
    allTemplateBlogPosts: Array<{ __typename?: "TemplateBlogPostRecord" } & BlogCardFragment>
  }

  export type TestimonialCardFragment = {
    __typename?: "TestimonialCardRecord"
    quote?: string | null
    person?: ({ __typename?: "PersonRecord" } & PersonFragment) | null
  }

  export type CarouselFragment = {
    __typename?: "CarouselRecord"
    id: string
    cards: Array<{ __typename?: "TestimonialCardRecord" } & TestimonialCardFragment>
  }

  export type FeatureCardFragment = {
    __typename?: "FeatureHighlightCardRecord"
    id: string
    heading?: string | null
    body?: string | null
    image?: ({ __typename?: "FileField" } & ImageFragment) | null
  }

  export type FeatureHighlightFragment = {
    __typename?: "FeatureHighlightRecord"
    id: string
    heading?: string | null
    eyebrow?: string | null
    body?: string | null
    cards: Array<{ __typename?: "FeatureHighlightCardRecord" } & FeatureCardFragment>
  }

  export type SiteMetaDataQuery = {
    __typename?: "Query"
    _site: { __typename?: "Site"; favicon?: ({ __typename?: "FileField" } & ImageFragment) | null }
  }

  export type GlobalNavFragment = {
    __typename?: "GlobalNavRecord"
    id: string
    links: Array<{ __typename?: "ButtonRecord" } & ButtonFragment>
  }

  export type GlobalNavComponentQuery = {
    __typename?: "Query"
    _site: { __typename?: "Site"; favicon?: ({ __typename?: "FileField" } & ImageFragment) | null }
    globalNav?: ({ __typename?: "GlobalNavRecord" } & GlobalNavFragment) | null
  }

  export type ProjectCardFragment = {
    __typename?: "TemplateProjectRecord"
    title?: string | null
    subtitle?: string | null
    slug?: string | null
    excerpt?: string | null
    techStack: Array<{ __typename?: "TechStackRecord" } & TechStackFragment>
    bannerImage?: ({ __typename?: "FileField" } & ImageFragment) | null
  }

  export type ProjectListingFragment = {
    __typename?: "ProjectListingRecord"
    id: string
    heading?: string | null
    headingAs?: string | null
    sectionId?: string | null
    bgColor?: string | null
    body?: string | null
    cards: Array<{ __typename?: "TemplateProjectRecord" } & ProjectCardFragment>
  }

  export type ScrollingSwitchbackFragment = {
    __typename?: "ScrollingSwitchbackRecord"
    id: string
    heading?: string | null
    body?: string | null
    switchbacks: Array<{ __typename?: "SwitchbackRecord" } & SwitchbackFragment>
  }

  export type SingleUseComponentFragment = {
    __typename?: "SingleUseComponentRecord"
    id: string
    componentName?: string | null
  }

  export type SwitchbackFragment = {
    __typename?: "SwitchbackRecord"
    designAccent?: string | null
    heading?: string | null
    headingAs?: string | null
    id: string
    reverse?: boolean | null
    sectionId?: string | null
    bgColor?: string | null
    body?: string | null
    image?: ({ __typename?: "FileField" } & ImageFragment) | null
  }

  export type GetTrustedCompaniesQuery = {
    __typename?: "Query"
    allCompanies: Array<{ __typename?: "CompanyRecord" } & CompanyFragment>
  }

  export type ImageFragment = {
    __typename?: "FileField"
    id: string
    alt?: string | null
    blurhash?: string | null
    height?: number | null
    width?: number | null
    url: string
  }

  export type CompanyFragment = {
    __typename?: "CompanyRecord"
    name?: string | null
    website?: string | null
    trust?: boolean | null
    logo?: ({ __typename?: "FileField" } & ImageFragment) | null
  }

  export type PersonFragment = {
    __typename?: "PersonRecord"
    firstName?: string | null
    lastName?: string | null
    role?: string | null
    website?: string | null
    thumbnail?: ({ __typename?: "FileField" } & ImageFragment) | null
    company?: ({ __typename?: "CompanyRecord" } & CompanyFragment) | null
  }

  export type CategoryFragment = {
    __typename?: "CategoryRecord"
    name?: string | null
    slug?: string | null
  }

  export type ButtonFragment = {
    __typename?: "ButtonRecord"
    id: string
    variant?: string | null
    label?: string | null
    url?: string | null
    disabled?: boolean | null
    startIcon?: string | null
    endIcon?: string | null
  }

  export type TechStackFragment = {
    __typename?: "TechStackRecord"
    id: string
    title?: string | null
    thumbnail?: ({ __typename?: "FileField" } & ImageFragment) | null
  }

  export type BlogFragment = {
    __typename?: "TemplateBlogPostRecord"
    id: string
    internalName?: string | null
    title?: string | null
    subtitle?: string | null
    publishDate?: string | null
    slug?: string | null
    categories: Array<{ __typename?: "CategoryRecord" } & CategoryFragment>
    body?: string | null
    featuredImage?: ({ __typename?: "FileField" } & ImageFragment) | null
  }

  export type TemplateBlogPostQuery = {
    __typename?: "Query"
    templateBlogPost?: ({ __typename?: "TemplateBlogPostRecord" } & BlogFragment) | null
  }

  export type AllBlogPostSlugsQuery = {
    __typename?: "Query"
    allTemplateBlogPosts: Array<{ __typename?: "TemplateBlogPostRecord"; slug?: string | null }>
  }

  export type BlogMetaDataQuery = {
    __typename?: "Query"
    blogMetaData?: {
      __typename?: "TemplateBlogPostRecord"
      id: string
      title?: string | null
      publishDate?: string | null
      seo?: {
        __typename?: "SeoField"
        description?: string | null
        title?: string | null
        image?: ({ __typename?: "FileField" } & ImageFragment) | null
      } | null
    } | null
  }

  export type InfoFragment = {
    __typename?: "TemplateInfoRecord"
    id: string
    slug?: string | null
    information?: string | null
  }

  export type AllTemplateInfoSlugsQuery = {
    __typename?: "Query"
    slugs: Array<{ __typename?: "TemplateInfoRecord"; slug?: string | null }>
  }

  export type TemplateInfoQuery = {
    __typename?: "Query"
    templateInfo?: ({ __typename?: "TemplateInfoRecord" } & InfoFragment) | null
  }

  export type PageFragment = {
    __typename?: "TemplatePageRecord"
    id: string
    slug?: string | null
    components: Array<
      | ({ __typename?: "BlogListingRecord" } & BlogListingFragment)
      | ({ __typename?: "CarouselRecord" } & CarouselFragment)
      | ({ __typename?: "FeatureHighlightRecord" } & FeatureHighlightFragment)
      | ({ __typename?: "ProjectListingRecord" } & ProjectListingFragment)
      | ({ __typename?: "ScrollingSwitchbackRecord" } & ScrollingSwitchbackFragment)
      | ({ __typename?: "SingleUseComponentRecord" } & SingleUseComponentFragment)
      | ({ __typename?: "SwitchbackRecord" } & SwitchbackFragment)
    >
    seo?: {
      __typename?: "SeoField"
      description?: string | null
      title?: string | null
      image?: ({ __typename?: "FileField" } & ImageFragment) | null
    } | null
  }

  export type AllTemplatePageSlugsQuery = {
    __typename?: "Query"
    allTemplatePages: Array<{ __typename?: "TemplatePageRecord"; slug?: string | null }>
  }

  export type TemplatePageQuery = {
    __typename?: "Query"
    templatePage?: ({ __typename?: "TemplatePageRecord" } & PageFragment) | null
  }

  export type TemplatePageMetadataQuery = {
    __typename?: "Query"
    metaData?: {
      __typename?: "TemplatePageRecord"
      id: string
      seo?: {
        __typename?: "SeoField"
        description?: string | null
        title?: string | null
        image?: ({ __typename?: "FileField" } & ImageFragment) | null
      } | null
    } | null
  }

  export type ProjectFragment = {
    __typename?: "TemplateProjectRecord"
    id: string
    slug?: string | null
    title?: string | null
    subtitle?: string | null
    heading?: string | null
    body?: string | null
    extraInformation?: string | null
    bannerImage?: ({ __typename?: "FileField" } & ImageFragment) | null
    techStack: Array<{ __typename?: "TechStackRecord" } & TechStackFragment>
    switchbacks?:
      | ({ __typename?: "ScrollingSwitchbackRecord" } & ScrollingSwitchbackFragment)
      | null
  }

  export type AllProjectSlugsQuery = {
    __typename?: "Query"
    allSlugs: Array<{ __typename?: "TemplateProjectRecord"; slug?: string | null }>
  }

  export type ProjectPageQuery = {
    __typename?: "Query"
    templateProject?: ({ __typename?: "TemplateProjectRecord" } & ProjectFragment) | null
    templatePage?: {
      __typename?: "TemplatePageRecord"
      components: Array<
        | { __typename?: "BlogListingRecord" }
        | { __typename?: "CarouselRecord" }
        | { __typename?: "FeatureHighlightRecord" }
        | ({ __typename?: "ProjectListingRecord" } & ProjectListingFragment)
        | { __typename?: "ScrollingSwitchbackRecord" }
        | { __typename?: "SingleUseComponentRecord" }
        | { __typename?: "SwitchbackRecord" }
      >
    } | null
  }

  export type ProjectPageMetadataQuery = {
    __typename?: "Query"
    metaData?: {
      __typename?: "TemplateProjectRecord"
      id: string
      seo?: {
        __typename?: "SeoField"
        title?: string | null
        description?: string | null
        image?: ({ __typename?: "FileField" } & ImageFragment) | null
      } | null
    } | null
  }
}
export {}
