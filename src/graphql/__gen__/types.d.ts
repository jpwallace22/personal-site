declare global {
  export type TestimonialCardFragment = {
    __typename?: "TestimonialCardRecord"
    quote?: { __typename?: "TestimonialCardModelQuoteField"; value: unknown } | null
    person?: ({ __typename?: "PersonRecord" } & PersonFragment) | null
  }

  export type CarouselFragment = {
    __typename?: "CarouselRecord"
    cards: Array<{ __typename?: "TestimonialCardRecord" } & TestimonialCardFragment>
  }

  export type SiteMetaDataQueryVariables = Exact<{ [key: string]: never }>

  export type SiteMetaDataQuery = {
    __typename?: "Query"
    _site: { __typename?: "Site"; favicon?: ({ __typename?: "FileField" } & ImageFragment) | null }
  }

  export type GlobalNavFragment = {
    __typename?: "GlobalNavRecord"
    id: string
    links: Array<{ __typename?: "ButtonRecord" } & ButtonFragment>
  }

  export type GlobalNavComponentQueryVariables = Exact<{ [key: string]: never }>

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
    excerpt?: {
      __typename?: "TemplateProjectModelExcerptField"
      value: unknown
      links: Array<string>
    } | null
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
    body?: { __typename?: "ProjectListingModelBodyField"; value: unknown } | null
    cards: Array<{ __typename?: "TemplateProjectRecord" } & ProjectCardFragment>
  }

  export type ScrollingSwitchbackFragment = {
    __typename?: "ScrollingSwitchbackRecord"
    id: string
    heading?: string | null
    body?: { __typename?: "ScrollingSwitchbackModelBodyField"; value: unknown } | null
    switchbacks: Array<{ __typename?: "SwitchbackRecord" } & SwitchbackFragment>
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
    body?: {
      __typename?: "SwitchbackModelBodyField"
      value: unknown
      links: Array<{ __typename?: "ButtonRecord" } & ButtonFragment>
    } | null
    image?: ({ __typename?: "FileField" } & ImageFragment) | null
  }

  export type StpTestQueryVariables = Exact<{ [key: string]: never }>

  export type StpTestQuery = {
    __typename?: "Query"
    blogPost?: {
      __typename?: "BlogPostRecord"
      body?: {
        __typename?: "BlogPostModelBodyField"
        value: unknown
        links: Array<{ __typename?: "ButtonRecord" } & ButtonFragment>
        blocks: Array<{
          __typename?: "ImageRecord"
          id: string
          media?: {
            __typename: "FileField"
            title?: string | null
            id: string
            alt?: string | null
            blurhash?: string | null
            height?: number | null
            width?: number | null
            url: string
          } | null
        }>
      } | null
    } | null
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

  export type PageFragment = {
    __typename?: "TemplatePageRecord"
    id: string
    slug?: string | null
    components: Array<
      | ({ __typename?: "CarouselRecord" } & CarouselFragment)
      | ({ __typename?: "ProjectListingRecord" } & ProjectListingFragment)
      | ({ __typename?: "ScrollingSwitchbackRecord" } & ScrollingSwitchbackFragment)
      | ({ __typename?: "SwitchbackRecord" } & SwitchbackFragment)
    >
    seo?: {
      __typename?: "SeoField"
      description?: string | null
      title?: string | null
      image?: ({ __typename?: "FileField" } & ImageFragment) | null
    } | null
  }

  export type TemplatePageQueryVariables = Exact<{
    slug?: InputMaybe<Scalars["String"]["input"]>
  }>

  export type TemplatePageQuery = {
    __typename?: "Query"
    templatePage?: ({ __typename?: "TemplatePageRecord" } & PageFragment) | null
  }

  export type ProjectFragment = {
    __typename?: "TemplateProjectRecord"
    id: string
    slug?: string | null
    title?: string | null
    subtitle?: string | null
    heading?: string | null
    body?: {
      __typename?: "TemplateProjectModelBodyField"
      value: unknown
      links: Array<{ __typename?: "ButtonRecord" } & ButtonFragment>
    } | null
    extraInformation?: {
      __typename?: "TemplateProjectModelExtraInformationField"
      value: unknown
      links: Array<{ __typename?: "ButtonRecord" } & ButtonFragment>
    } | null
    bannerImage?: ({ __typename?: "FileField" } & ImageFragment) | null
    techStack: Array<{ __typename?: "TechStackRecord" } & TechStackFragment>
    switchbacks?:
      | ({ __typename?: "ScrollingSwitchbackRecord" } & ScrollingSwitchbackFragment)
      | null
  }

  export type AllProjectSlugsQueryVariables = Exact<{ [key: string]: never }>

  export type AllProjectSlugsQuery = {
    __typename?: "Query"
    allTemplateProjects: Array<{ __typename?: "TemplateProjectRecord"; slug?: string | null }>
  }

  export type ProjectPageQueryVariables = Exact<{
    slug: Scalars["String"]["input"]
  }>

  export type ProjectPageQuery = {
    __typename?: "Query"
    templateProject?: ({ __typename?: "TemplateProjectRecord" } & ProjectFragment) | null
    templatePage?: {
      __typename?: "TemplatePageRecord"
      components: Array<
        | { __typename?: "CarouselRecord" }
        | ({ __typename?: "ProjectListingRecord" } & ProjectListingFragment)
        | { __typename?: "ScrollingSwitchbackRecord" }
        | { __typename?: "SwitchbackRecord" }
      >
    } | null
  }
}
export {}
