export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string | number; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  BooleanType: { input: boolean; output: boolean }
  CustomData: { input: Record<string, unknown>; output: Record<string, unknown> }
  Date: { input: string; output: string }
  DateTime: { input: string; output: string }
  FloatType: { input: number; output: number }
  IntType: { input: number; output: number }
  ItemId: { input: string; output: string }
  JsonField: { input: unknown; output: unknown }
  MetaTagAttributes: { input: Record<string, string>; output: Record<string, string> }
  UploadId: { input: string; output: string }
}

export interface AlternatingSwitchbackModelBodyField {
  __typename?: "AlternatingSwitchbackModelBodyField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface AlternatingSwitchbackModelFilter {
  AND?: InputMaybe<Array<InputMaybe<AlternatingSwitchbackModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AlternatingSwitchbackModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  body?: InputMaybe<StructuredTextFilter>
  cards?: InputMaybe<LinksFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  heading?: InputMaybe<StringFilter>
  headingAs?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  sectionId?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum AlternatingSwitchbackModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  HeadingAs_ASC = "headingAs_ASC",
  HeadingAs_DESC = "headingAs_DESC",
  Heading_ASC = "heading_ASC",
  Heading_DESC = "heading_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  SectionId_ASC = "sectionId_ASC",
  SectionId_DESC = "sectionId_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Alternating Switchbacks (alternating_switchback) */
export interface AlternatingSwitchbackRecord extends RecordInterface {
  __typename?: "AlternatingSwitchbackRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  body?: Maybe<AlternatingSwitchbackModelBodyField>
  cards: Array<WorkRecord>
  createdAt: Scalars["DateTime"]["output"]
  heading?: Maybe<Scalars["String"]["output"]>
  headingAs?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  sectionId?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Alternating Switchbacks (alternating_switchback) */
export interface AlternatingSwitchbackRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface BlogListingModelFilter {
  AND?: InputMaybe<Array<InputMaybe<BlogListingModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<BlogListingModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  blogs?: InputMaybe<LinksFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum BlogListingModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Blog Listing (blog_listing) */
export interface BlogListingRecord extends RecordInterface {
  __typename?: "BlogListingRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  blogs: Array<BlogPostRecord>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Blog Listing (blog_listing) */
export interface BlogListingRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

/** Record of type Blog Page (blog_page) */
export interface BlogPageRecord extends RecordInterface {
  __typename?: "BlogPageRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  componentGenerator?: Maybe<PageGeneratorRecord>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  seo?: Maybe<SeoField>
  switchback?: Maybe<SwitchbackRecord>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Blog Page (blog_page) */
export interface BlogPageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface BlogPostModelBodyField {
  __typename?: "BlogPostModelBodyField"
  blocks: Array<ImageRecord>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface BlogPostModelExcerptField {
  __typename?: "BlogPostModelExcerptField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface BlogPostModelFilter {
  AND?: InputMaybe<Array<InputMaybe<BlogPostModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<BlogPostModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  body?: InputMaybe<StructuredTextFilter>
  categories?: InputMaybe<LinksFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  excerpt?: InputMaybe<StructuredTextFilter>
  featuredImage?: InputMaybe<FileFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  publishDate?: InputMaybe<DateFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  subtitle?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum BlogPostModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  PublishDate_ASC = "publishDate_ASC",
  PublishDate_DESC = "publishDate_DESC",
  Subtitle_ASC = "subtitle_ASC",
  Subtitle_DESC = "subtitle_DESC",
  Title_ASC = "title_ASC",
  Title_DESC = "title_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Blog Post (blog_post) */
export interface BlogPostRecord extends RecordInterface {
  __typename?: "BlogPostRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  body?: Maybe<BlogPostModelBodyField>
  categories: Array<CategoryRecord>
  createdAt: Scalars["DateTime"]["output"]
  excerpt?: Maybe<BlogPostModelExcerptField>
  featuredImage?: Maybe<FileField>
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  publishDate?: Maybe<Scalars["Date"]["output"]>
  seo?: Maybe<SeoField>
  slug?: Maybe<Scalars["String"]["output"]>
  subtitle?: Maybe<Scalars["String"]["output"]>
  title?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Blog Post (blog_post) */
export interface BlogPostRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter Boolean fields */
export interface BooleanFilter {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["BooleanType"]["input"]>
}

export interface ButtonModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ButtonModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ButtonModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  disabled?: InputMaybe<BooleanFilter>
  icon?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  url?: InputMaybe<StringFilter>
}

export enum ButtonModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Disabled_ASC = "disabled_ASC",
  Disabled_DESC = "disabled_DESC",
  Icon_ASC = "icon_ASC",
  Icon_DESC = "icon_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  Title_ASC = "title_ASC",
  Title_DESC = "title_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
  Url_ASC = "url_ASC",
  Url_DESC = "url_DESC",
}

/** Record of type Button (button) */
export interface ButtonRecord extends RecordInterface {
  __typename?: "ButtonRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  disabled?: Maybe<Scalars["BooleanType"]["output"]>
  icon?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  title?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
  url?: Maybe<Scalars["String"]["output"]>
}

/** Record of type Button (button) */
export interface ButtonRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export type CarouselModelCardsField = BlogPostRecord | TestimonialCardRecord

export interface CarouselModelFilter {
  AND?: InputMaybe<Array<InputMaybe<CarouselModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CarouselModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  cards?: InputMaybe<LinksFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum CarouselModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Carousel (carousel) */
export interface CarouselRecord extends RecordInterface {
  __typename?: "CarouselRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  cards: Array<CarouselModelCardsField>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Carousel (carousel) */
export interface CarouselRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface CaseStudyCardModelBodyField {
  __typename?: "CaseStudyCardModelBodyField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface CaseStudyCardModelFilter {
  AND?: InputMaybe<Array<InputMaybe<CaseStudyCardModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CaseStudyCardModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  body?: InputMaybe<StructuredTextFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  internalName?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum CaseStudyCardModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Case Study Card (case_study_card) */
export interface CaseStudyCardRecord extends RecordInterface {
  __typename?: "CaseStudyCardRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  body?: Maybe<CaseStudyCardModelBodyField>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  image?: Maybe<FileField>
  internalName?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Case Study Card (case_study_card) */
export interface CaseStudyCardRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface CategoryModelFilter {
  AND?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CategoryModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  slug?: InputMaybe<SlugFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum CategoryModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  Name_ASC = "name_ASC",
  Name_DESC = "name_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Category (category) */
export interface CategoryRecord extends RecordInterface {
  __typename?: "CategoryRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  name?: Maybe<Scalars["String"]["output"]>
  slug?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Category (category) */
export interface CategoryRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface CollectionMetadata {
  __typename?: "CollectionMetadata"
  count: Scalars["IntType"]["output"]
}

export enum ColorBucketType {
  Black = "black",
  Blue = "blue",
  Brown = "brown",
  Cyan = "cyan",
  Green = "green",
  Grey = "grey",
  Orange = "orange",
  Pink = "pink",
  Purple = "purple",
  Red = "red",
  White = "white",
  Yellow = "yellow",
}

export interface ColorField {
  __typename?: "ColorField"
  alpha: Scalars["IntType"]["output"]
  blue: Scalars["IntType"]["output"]
  cssRgb: Scalars["String"]["output"]
  green: Scalars["IntType"]["output"]
  hex: Scalars["String"]["output"]
  red: Scalars["IntType"]["output"]
}

export interface CompanyModelFilter {
  AND?: InputMaybe<Array<InputMaybe<CompanyModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CompanyModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  logo?: InputMaybe<FileFilter>
  name?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  website?: InputMaybe<StringFilter>
}

export enum CompanyModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  Name_ASC = "name_ASC",
  Name_DESC = "name_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
  Website_ASC = "website_ASC",
  Website_DESC = "website_DESC",
}

/** Record of type Company (company) */
export interface CompanyRecord extends RecordInterface {
  __typename?: "CompanyRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  logo?: Maybe<FileField>
  name?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
  website?: Maybe<Scalars["String"]["output"]>
}

/** Record of type Company (company) */
export interface CompanyRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by creation datetime */
export interface CreatedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>
}

/** Specifies how to filter Date fields */
export interface DateFilter {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["Date"]["input"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["Date"]["input"]>
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["Date"]["input"]>
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["Date"]["input"]>
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["Date"]["input"]>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars["Date"]["input"]>
}

export enum FaviconType {
  AppleTouchIcon = "appleTouchIcon",
  Icon = "icon",
  MsApplication = "msApplication",
}

export interface FeaturedBlogModelBodyField {
  __typename?: "FeaturedBlogModelBodyField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface FeaturedBlogModelFilter {
  AND?: InputMaybe<Array<InputMaybe<FeaturedBlogModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<FeaturedBlogModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  blogs?: InputMaybe<LinksFilter>
  body?: InputMaybe<StructuredTextFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  heading?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum FeaturedBlogModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Heading_ASC = "heading_ASC",
  Heading_DESC = "heading_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Featured Blog (featured_blog) */
export interface FeaturedBlogRecord extends RecordInterface {
  __typename?: "FeaturedBlogRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  blogs: Array<BlogPostRecord>
  body?: Maybe<FeaturedBlogModelBodyField>
  createdAt: Scalars["DateTime"]["output"]
  heading?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Featured Blog (featured_blog) */
export interface FeaturedBlogRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface FileField extends FileFieldInterface {
  __typename?: "FileField"
  _createdAt: Scalars["DateTime"]["output"]
  _updatedAt: Scalars["DateTime"]["output"]
  alt?: Maybe<Scalars["String"]["output"]>
  author?: Maybe<Scalars["String"]["output"]>
  basename: Scalars["String"]["output"]
  blurUpThumb?: Maybe<Scalars["String"]["output"]>
  blurhash?: Maybe<Scalars["String"]["output"]>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars["String"]["output"]>
  customData: Scalars["CustomData"]["output"]
  exifInfo: Scalars["CustomData"]["output"]
  filename: Scalars["String"]["output"]
  focalPoint?: Maybe<FocalPoint>
  format: Scalars["String"]["output"]
  height?: Maybe<Scalars["IntType"]["output"]>
  id: Scalars["UploadId"]["output"]
  md5: Scalars["String"]["output"]
  mimeType: Scalars["String"]["output"]
  notes?: Maybe<Scalars["String"]["output"]>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars["IntType"]["output"]
  smartTags: Array<Scalars["String"]["output"]>
  tags: Array<Scalars["String"]["output"]>
  thumbhash?: Maybe<Scalars["String"]["output"]>
  title?: Maybe<Scalars["String"]["output"]>
  url: Scalars["String"]["output"]
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars["IntType"]["output"]>
}

export interface FileFieldAltArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldBlurUpThumbArgs {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars["Float"]["input"]
  quality?: Scalars["Int"]["input"]
  size?: Scalars["Int"]["input"]
}

export interface FileFieldCustomDataArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldFocalPointArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldResponsiveImageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars["String"]["input"]>
}

export interface FileFieldTitleArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldUrlArgs {
  imgixParams?: InputMaybe<ImgixParams>
}

export interface FileFieldInterface {
  _createdAt: Scalars["DateTime"]["output"]
  _updatedAt: Scalars["DateTime"]["output"]
  alt?: Maybe<Scalars["String"]["output"]>
  author?: Maybe<Scalars["String"]["output"]>
  basename: Scalars["String"]["output"]
  blurUpThumb?: Maybe<Scalars["String"]["output"]>
  blurhash?: Maybe<Scalars["String"]["output"]>
  colors: Array<ColorField>
  copyright?: Maybe<Scalars["String"]["output"]>
  customData: Scalars["CustomData"]["output"]
  exifInfo: Scalars["CustomData"]["output"]
  filename: Scalars["String"]["output"]
  focalPoint?: Maybe<FocalPoint>
  format: Scalars["String"]["output"]
  height?: Maybe<Scalars["IntType"]["output"]>
  id: Scalars["UploadId"]["output"]
  md5: Scalars["String"]["output"]
  mimeType: Scalars["String"]["output"]
  notes?: Maybe<Scalars["String"]["output"]>
  responsiveImage?: Maybe<ResponsiveImage>
  size: Scalars["IntType"]["output"]
  smartTags: Array<Scalars["String"]["output"]>
  tags: Array<Scalars["String"]["output"]>
  thumbhash?: Maybe<Scalars["String"]["output"]>
  title?: Maybe<Scalars["String"]["output"]>
  url: Scalars["String"]["output"]
  video?: Maybe<UploadVideoField>
  width?: Maybe<Scalars["IntType"]["output"]>
}

export interface FileFieldInterfaceAltArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldInterfaceBlurUpThumbArgs {
  imgixParams?: InputMaybe<ImgixParams>
  punch?: Scalars["Float"]["input"]
  quality?: Scalars["Int"]["input"]
  size?: Scalars["Int"]["input"]
}

export interface FileFieldInterfaceCustomDataArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldInterfaceFocalPointArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldInterfaceResponsiveImageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  imgixParams?: InputMaybe<ImgixParams>
  locale?: InputMaybe<SiteLocale>
  sizes?: InputMaybe<Scalars["String"]["input"]>
}

export interface FileFieldInterfaceTitleArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export interface FileFieldInterfaceUrlArgs {
  imgixParams?: InputMaybe<ImgixParams>
}

/** Specifies how to filter Single-file/image fields */
export interface FileFilter {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars["UploadId"]["input"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars["UploadId"]["input"]>
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>
}

/** Record of type Global Nav (global_nav) */
export interface GlobalNavRecord extends RecordInterface {
  __typename?: "GlobalNavRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  links: Array<ButtonRecord>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Global Nav (global_nav) */
export interface GlobalNavRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface GlobalSeoField {
  __typename?: "GlobalSeoField"
  facebookPageUrl?: Maybe<Scalars["String"]["output"]>
  fallbackSeo?: Maybe<SeoField>
  siteName?: Maybe<Scalars["String"]["output"]>
  titleSuffix?: Maybe<Scalars["String"]["output"]>
  twitterAccount?: Maybe<Scalars["String"]["output"]>
}

export type HomepageModelComponentsField = CarouselRecord | SwitchbackRecord

export interface HomepageModelWorksIntroField {
  __typename?: "HomepageModelWorksIntroField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

/** Record of type Homepage (homepage) */
export interface HomepageRecord extends RecordInterface {
  __typename?: "HomepageRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  aboutMe?: Maybe<SwitchbackRecord>
  components: Array<HomepageModelComponentsField>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  seo?: Maybe<SeoField>
  testimonials: Array<TestimonialCardRecord>
  updatedAt: Scalars["DateTime"]["output"]
  works: Array<WorkRecord>
  worksHeading?: Maybe<Scalars["String"]["output"]>
  worksIntro?: Maybe<HomepageModelWorksIntroField>
}

/** Record of type Homepage (homepage) */
export interface HomepageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

/** Block of type Image (image) */
export interface ImageRecord extends RecordInterface {
  __typename?: "ImageRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  media?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Block of type Image (image) */
export interface ImageRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface ImgixParams {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars["BooleanType"]["input"]>
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars["BooleanType"]["input"]>
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars["BooleanType"]["input"]>
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars["BooleanType"]["input"]>
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars["BooleanType"]["input"]>
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars["BooleanType"]["input"]>
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars["String"]["input"]>
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars["FloatType"]["input"]>
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars["IntType"]["input"]>
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars["FloatType"]["input"]>
}

export enum ImgixParamsAuto {
  Compress = "compress",
  Enhance = "enhance",
  Format = "format",
  Redeye = "redeye",
}

export enum ImgixParamsBlendAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsBlendCrop {
  Bottom = "bottom",
  Faces = "faces",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsBlendFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Max = "max",
  Scale = "scale",
}

export enum ImgixParamsBlendMode {
  Burn = "burn",
  Color = "color",
  Darken = "darken",
  Difference = "difference",
  Dodge = "dodge",
  Exclusion = "exclusion",
  Hardlight = "hardlight",
  Hue = "hue",
  Lighten = "lighten",
  Luminosity = "luminosity",
  Multiply = "multiply",
  Normal = "normal",
  Overlay = "overlay",
  Saturation = "saturation",
  Screen = "screen",
  Softlight = "softlight",
}

export enum ImgixParamsBlendSize {
  Inherit = "inherit",
}

export enum ImgixParamsCh {
  Dpr = "dpr",
  SaveData = "saveData",
  Width = "width",
}

export enum ImgixParamsCrop {
  Bottom = "bottom",
  Edges = "edges",
  Entropy = "entropy",
  Faces = "faces",
  Focalpoint = "focalpoint",
  Left = "left",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsCs {
  Adobergb1998 = "adobergb1998",
  Srgb = "srgb",
  Strip = "strip",
  Tinysrgb = "tinysrgb",
}

export enum ImgixParamsFill {
  Blur = "blur",
  Solid = "solid",
}

export enum ImgixParamsFit {
  Clamp = "clamp",
  Clip = "clip",
  Crop = "crop",
  Facearea = "facearea",
  Fill = "fill",
  Fillmax = "fillmax",
  Max = "max",
  Min = "min",
  Scale = "scale",
}

export enum ImgixParamsFlip {
  H = "h",
  Hv = "hv",
  V = "v",
}

export enum ImgixParamsFm {
  Avif = "avif",
  Blurhash = "blurhash",
  Gif = "gif",
  Jp2 = "jp2",
  Jpg = "jpg",
  Json = "json",
  Jxr = "jxr",
  Mp4 = "mp4",
  Pjpg = "pjpg",
  Png = "png",
  Png8 = "png8",
  Png32 = "png32",
  Webm = "webm",
  Webp = "webp",
}

export enum ImgixParamsIptc {
  Allow = "allow",
  Block = "block",
}

export enum ImgixParamsMarkAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsMarkFit {
  Clip = "clip",
  Crop = "crop",
  Fill = "fill",
  Max = "max",
  Scale = "scale",
}

export enum ImgixParamsMarkTile {
  Grid = "grid",
}

export enum ImgixParamsPalette {
  Css = "css",
  Json = "json",
}

export enum ImgixParamsTransparency {
  Grid = "grid",
}

export enum ImgixParamsTrim {
  Auto = "auto",
  Color = "color",
}

export enum ImgixParamsTxtAlign {
  Bottom = "bottom",
  Center = "center",
  Left = "left",
  Middle = "middle",
  Right = "right",
  Top = "top",
}

export enum ImgixParamsTxtClip {
  Ellipsis = "ellipsis",
  End = "end",
  Middle = "middle",
  Start = "start",
}

export enum ImgixParamsTxtFit {
  Max = "max",
}

/** Specifies how to filter by usage */
export interface InUseFilter {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars["BooleanType"]["input"]>
}

/** Specifies how to filter by ID */
export interface ItemIdFilter {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars["ItemId"]["input"]>
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars["ItemId"]["input"]>
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
}

export enum ItemStatus {
  Draft = "draft",
  Published = "published",
  Updated = "updated",
}

/** Specifies how to filter Single-link fields */
export interface LinkFilter {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars["ItemId"]["input"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars["ItemId"]["input"]>
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
}

/** Specifies how to filter Multiple-links fields */
export interface LinksFilter {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ItemId"]["input"]>>>
}

export enum MuxThumbnailFormatType {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
}

/** Specifies how to filter by image orientation */
export interface OrientationFilter {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>
}

export type PageGeneratorModelComponentsField =
  | AlternatingSwitchbackRecord
  | BlogListingRecord
  | CarouselRecord
  | FeaturedBlogRecord
  | ScrollingSwitchbackRecord
  | SwitchbackRecord

export interface PageGeneratorModelFilter {
  AND?: InputMaybe<Array<InputMaybe<PageGeneratorModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageGeneratorModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  components?: InputMaybe<LinksFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum PageGeneratorModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Page Generator (page_generator) */
export interface PageGeneratorRecord extends RecordInterface {
  __typename?: "PageGeneratorRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  components: Array<PageGeneratorModelComponentsField>
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  seo?: Maybe<SeoField>
  slug?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Page Generator (page_generator) */
export interface PageGeneratorRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface PersonModelFilter {
  AND?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  company?: InputMaybe<LinkFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  firstName?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  lastName?: InputMaybe<StringFilter>
  role?: InputMaybe<StringFilter>
  thumbnail?: InputMaybe<FileFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
  website?: InputMaybe<StringFilter>
}

export enum PersonModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  FirstName_ASC = "firstName_ASC",
  FirstName_DESC = "firstName_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  LastName_ASC = "lastName_ASC",
  LastName_DESC = "lastName_DESC",
  Role_ASC = "role_ASC",
  Role_DESC = "role_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
  Website_ASC = "website_ASC",
  Website_DESC = "website_DESC",
}

/** Record of type Person (person) */
export interface PersonRecord extends RecordInterface {
  __typename?: "PersonRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  company?: Maybe<CompanyRecord>
  createdAt: Scalars["DateTime"]["output"]
  firstName?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  lastName?: Maybe<Scalars["String"]["output"]>
  role?: Maybe<Scalars["String"]["output"]>
  thumbnail?: Maybe<FileField>
  updatedAt: Scalars["DateTime"]["output"]
  website?: Maybe<Scalars["String"]["output"]>
}

/** Record of type Person (person) */
export interface PersonRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by publication datetime */
export interface PublishedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>
}

/** The query root for this schema */
export interface Query {
  __typename?: "Query"
  /** Returns meta information regarding a record collection */
  _allAlternatingSwitchbacksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allBlogListingsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allBlogPostsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allButtonsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCarouselsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCaseStudyCardsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCategoriesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allCompaniesMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allFeaturedBlogsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPageGeneratorsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allScrollingSwitchbacksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allSwitchbacksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTechStacksMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allTestimonialCardsMeta: CollectionMetadata
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata
  /** Returns meta information regarding a record collection */
  _allWorksMeta: CollectionMetadata
  /** Returns the single instance record */
  _site: Site
  /** Returns a collection of records */
  allAlternatingSwitchbacks: Array<AlternatingSwitchbackRecord>
  /** Returns a collection of records */
  allBlogListings: Array<BlogListingRecord>
  /** Returns a collection of records */
  allBlogPosts: Array<BlogPostRecord>
  /** Returns a collection of records */
  allButtons: Array<ButtonRecord>
  /** Returns a collection of records */
  allCarousels: Array<CarouselRecord>
  /** Returns a collection of records */
  allCaseStudyCards: Array<CaseStudyCardRecord>
  /** Returns a collection of records */
  allCategories: Array<CategoryRecord>
  /** Returns a collection of records */
  allCompanies: Array<CompanyRecord>
  /** Returns a collection of records */
  allFeaturedBlogs: Array<FeaturedBlogRecord>
  /** Returns a collection of records */
  allPageGenerators: Array<PageGeneratorRecord>
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>
  /** Returns a collection of records */
  allScrollingSwitchbacks: Array<ScrollingSwitchbackRecord>
  /** Returns a collection of records */
  allSwitchbacks: Array<SwitchbackRecord>
  /** Returns a collection of records */
  allTechStacks: Array<TechStackRecord>
  /** Returns a collection of records */
  allTestimonialCards: Array<TestimonialCardRecord>
  /** Returns a collection of assets */
  allUploads: Array<FileField>
  /** Returns a collection of records */
  allWorks: Array<WorkRecord>
  /** Returns a specific record */
  alternatingSwitchback?: Maybe<AlternatingSwitchbackRecord>
  /** Returns a specific record */
  blogListing?: Maybe<BlogListingRecord>
  /** Returns the single instance record */
  blogPage?: Maybe<BlogPageRecord>
  /** Returns a specific record */
  blogPost?: Maybe<BlogPostRecord>
  /** Returns a specific record */
  button?: Maybe<ButtonRecord>
  /** Returns a specific record */
  carousel?: Maybe<CarouselRecord>
  /** Returns a specific record */
  caseStudyCard?: Maybe<CaseStudyCardRecord>
  /** Returns a specific record */
  category?: Maybe<CategoryRecord>
  /** Returns a specific record */
  company?: Maybe<CompanyRecord>
  /** Returns a specific record */
  featuredBlog?: Maybe<FeaturedBlogRecord>
  /** Returns the single instance record */
  globalNav?: Maybe<GlobalNavRecord>
  /** Returns the single instance record */
  homepage?: Maybe<HomepageRecord>
  /** Returns a specific record */
  pageGenerator?: Maybe<PageGeneratorRecord>
  /** Returns a specific record */
  person?: Maybe<PersonRecord>
  /** Returns a specific record */
  scrollingSwitchback?: Maybe<ScrollingSwitchbackRecord>
  /** Returns a specific record */
  switchback?: Maybe<SwitchbackRecord>
  /** Returns a specific record */
  techStack?: Maybe<TechStackRecord>
  /** Returns a specific record */
  testimonialCard?: Maybe<TestimonialCardRecord>
  /** Returns a specific asset */
  upload?: Maybe<FileField>
  /** Returns a specific record */
  work?: Maybe<WorkRecord>
}

/** The query root for this schema */
export interface Query_AllAlternatingSwitchbacksMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<AlternatingSwitchbackModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllBlogListingsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<BlogListingModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllBlogPostsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<BlogPostModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllButtonsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ButtonModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllCarouselsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CarouselModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllCaseStudyCardsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CaseStudyCardModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllCategoriesMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CategoryModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllCompaniesMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CompanyModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllFeaturedBlogsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FeaturedBlogModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllPageGeneratorsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageGeneratorModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllPeopleMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllScrollingSwitchbacksMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ScrollingSwitchbackModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllSwitchbacksMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<SwitchbackModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllTechStacksMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TechStackModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllTestimonialCardsMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TestimonialCardModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllUploadsMetaArgs {
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_AllWorksMetaArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<WorkModelFilter>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface Query_SiteArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface QueryAllAlternatingSwitchbacksArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<AlternatingSwitchbackModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<AlternatingSwitchbackModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllBlogListingsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<BlogListingModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<BlogListingModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllBlogPostsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<BlogPostModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<BlogPostModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllButtonsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ButtonModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ButtonModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllCarouselsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CarouselModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CarouselModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllCaseStudyCardsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CaseStudyCardModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyCardModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllCategoriesArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CategoryModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllCompaniesArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CompanyModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllFeaturedBlogsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FeaturedBlogModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FeaturedBlogModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllPageGeneratorsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageGeneratorModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageGeneratorModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllPeopleArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllScrollingSwitchbacksArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ScrollingSwitchbackModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ScrollingSwitchbackModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllSwitchbacksArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<SwitchbackModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<SwitchbackModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllTechStacksArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TechStackModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<TechStackModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllTestimonialCardsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TestimonialCardModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialCardModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllUploadsArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAllWorksArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<WorkModelFilter>
  first?: InputMaybe<Scalars["IntType"]["input"]>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<WorkModelOrderBy>>>
  skip?: InputMaybe<Scalars["IntType"]["input"]>
}

/** The query root for this schema */
export interface QueryAlternatingSwitchbackArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<AlternatingSwitchbackModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<AlternatingSwitchbackModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryBlogListingArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<BlogListingModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<BlogListingModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryBlogPageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface QueryBlogPostArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<BlogPostModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<BlogPostModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryButtonArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ButtonModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ButtonModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryCarouselArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CarouselModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CarouselModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryCaseStudyCardArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CaseStudyCardModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CaseStudyCardModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryCategoryArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CategoryModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CategoryModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryCompanyArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<CompanyModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<CompanyModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryFeaturedBlogArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<FeaturedBlogModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<FeaturedBlogModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryGlobalNavArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface QueryHomepageArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

/** The query root for this schema */
export interface QueryPageGeneratorArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PageGeneratorModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PageGeneratorModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryPersonArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<PersonModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryScrollingSwitchbackArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<ScrollingSwitchbackModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<ScrollingSwitchbackModelOrderBy>>>
}

/** The query root for this schema */
export interface QuerySwitchbackArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<SwitchbackModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<SwitchbackModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryTechStackArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TechStackModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<TechStackModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryTestimonialCardArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<TestimonialCardModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialCardModelOrderBy>>>
}

/** The query root for this schema */
export interface QueryUploadArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<UploadFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>
}

/** The query root for this schema */
export interface QueryWorkArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  filter?: InputMaybe<WorkModelFilter>
  locale?: InputMaybe<SiteLocale>
  orderBy?: InputMaybe<Array<InputMaybe<WorkModelOrderBy>>>
}

export interface RecordInterface {
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
}

export interface RecordInterface_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export interface ResolutionFilter {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>
}

export enum ResolutionType {
  Icon = "icon",
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export interface ResponsiveImage {
  __typename?: "ResponsiveImage"
  alt?: Maybe<Scalars["String"]["output"]>
  aspectRatio: Scalars["FloatType"]["output"]
  base64?: Maybe<Scalars["String"]["output"]>
  bgColor?: Maybe<Scalars["String"]["output"]>
  height: Scalars["IntType"]["output"]
  sizes: Scalars["String"]["output"]
  src: Scalars["String"]["output"]
  srcSet: Scalars["String"]["output"]
  title?: Maybe<Scalars["String"]["output"]>
  webpSrcSet: Scalars["String"]["output"]
  width: Scalars["IntType"]["output"]
}

export interface ScrollingSwitchbackModelBodyField {
  __typename?: "ScrollingSwitchbackModelBodyField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface ScrollingSwitchbackModelFilter {
  AND?: InputMaybe<Array<InputMaybe<ScrollingSwitchbackModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ScrollingSwitchbackModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  body?: InputMaybe<StructuredTextFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  heading?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  switchbacks?: InputMaybe<LinksFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum ScrollingSwitchbackModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Heading_ASC = "heading_ASC",
  Heading_DESC = "heading_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Scrolling Switchback (scrolling_switchback) */
export interface ScrollingSwitchbackRecord extends RecordInterface {
  __typename?: "ScrollingSwitchbackRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  body?: Maybe<ScrollingSwitchbackModelBodyField>
  createdAt: Scalars["DateTime"]["output"]
  heading?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  switchbacks: Array<SwitchbackRecord>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Scrolling Switchback (scrolling_switchback) */
export interface ScrollingSwitchbackRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface SeoField {
  __typename?: "SeoField"
  description?: Maybe<Scalars["String"]["output"]>
  image?: Maybe<FileField>
  title?: Maybe<Scalars["String"]["output"]>
  twitterCard?: Maybe<Scalars["String"]["output"]>
}

/** Specifies how to filter SEO meta tags fields */
export interface SeoFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
}

export interface Site {
  __typename?: "Site"
  favicon?: Maybe<FileField>
  faviconMetaTags: Array<Tag>
  globalSeo?: Maybe<GlobalSeoField>
  locales: Array<SiteLocale>
}

export interface SiteFaviconMetaTagsArgs {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>
}

export interface SiteGlobalSeoArgs {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>
  locale?: InputMaybe<SiteLocale>
}

export enum SiteLocale {
  En = "en",
}

/** Specifies how to filter Slug fields */
export interface SlugFilter {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["String"]["input"]>
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars["String"]["input"]>
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** Specifies how to filter by status */
export interface StatusFilter {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>
}

/** Specifies how to filter Single-line string fields */
export interface StringFilter {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars["String"]["input"]>
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars["String"]["input"]>
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export interface StringMatchesFilter {
  caseSensitive?: InputMaybe<Scalars["BooleanType"]["input"]>
  pattern: Scalars["String"]["input"]
  regexp?: InputMaybe<Scalars["BooleanType"]["input"]>
}

/** Specifies how to filter Structured Text fields */
export interface StructuredTextFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export interface SwitchbackModelBodyField {
  __typename?: "SwitchbackModelBodyField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface SwitchbackModelFilter {
  AND?: InputMaybe<Array<InputMaybe<SwitchbackModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SwitchbackModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  body?: InputMaybe<StructuredTextFilter>
  buttons?: InputMaybe<LinksFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  heading?: InputMaybe<StringFilter>
  headingAs?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  image?: InputMaybe<FileFilter>
  internalName?: InputMaybe<StringFilter>
  reverse?: InputMaybe<BooleanFilter>
  sectionBackgroundColor?: InputMaybe<StringFilter>
  sectionId?: InputMaybe<StringFilter>
  showDots?: InputMaybe<BooleanFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum SwitchbackModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  HeadingAs_ASC = "headingAs_ASC",
  HeadingAs_DESC = "headingAs_DESC",
  Heading_ASC = "heading_ASC",
  Heading_DESC = "heading_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  Reverse_ASC = "reverse_ASC",
  Reverse_DESC = "reverse_DESC",
  SectionBackgroundColor_ASC = "sectionBackgroundColor_ASC",
  SectionBackgroundColor_DESC = "sectionBackgroundColor_DESC",
  SectionId_ASC = "sectionId_ASC",
  SectionId_DESC = "sectionId_DESC",
  ShowDots_ASC = "showDots_ASC",
  ShowDots_DESC = "showDots_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Switchback (switchback) */
export interface SwitchbackRecord extends RecordInterface {
  __typename?: "SwitchbackRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  body?: Maybe<SwitchbackModelBodyField>
  buttons: Array<ButtonRecord>
  createdAt: Scalars["DateTime"]["output"]
  heading?: Maybe<Scalars["String"]["output"]>
  headingAs?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ItemId"]["output"]
  image?: Maybe<FileField>
  internalName?: Maybe<Scalars["String"]["output"]>
  reverse?: Maybe<Scalars["BooleanType"]["output"]>
  sectionBackgroundColor?: Maybe<Scalars["String"]["output"]>
  sectionId?: Maybe<Scalars["String"]["output"]>
  showDots?: Maybe<Scalars["BooleanType"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Switchback (switchback) */
export interface SwitchbackRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface Tag {
  __typename?: "Tag"
  attributes?: Maybe<Scalars["MetaTagAttributes"]["output"]>
  content?: Maybe<Scalars["String"]["output"]>
  tag: Scalars["String"]["output"]
}

export interface TechStackModelFilter {
  AND?: InputMaybe<Array<InputMaybe<TechStackModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<TechStackModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  thumbnail?: InputMaybe<FileFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum TechStackModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  Title_ASC = "title_ASC",
  Title_DESC = "title_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Tech Stack (tech_stack) */
export interface TechStackRecord extends RecordInterface {
  __typename?: "TechStackRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  thumbnail?: Maybe<FileField>
  title?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Tech Stack (tech_stack) */
export interface TechStackRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface TestimonialCardModelFilter {
  AND?: InputMaybe<Array<InputMaybe<TestimonialCardModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<TestimonialCardModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  id?: InputMaybe<ItemIdFilter>
  internalName?: InputMaybe<StringFilter>
  person?: InputMaybe<LinkFilter>
  quote?: InputMaybe<StructuredTextFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export enum TestimonialCardModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

export interface TestimonialCardModelQuoteField {
  __typename?: "TestimonialCardModelQuoteField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

/** Record of type Testimonial Card (testimonial_card) */
export interface TestimonialCardRecord extends RecordInterface {
  __typename?: "TestimonialCardRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  createdAt: Scalars["DateTime"]["output"]
  id: Scalars["ItemId"]["output"]
  internalName?: Maybe<Scalars["String"]["output"]>
  person?: Maybe<PersonRecord>
  quote?: Maybe<TestimonialCardModelQuoteField>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Testimonial Card (testimonial_card) */
export interface TestimonialCardRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

/** Specifies how to filter by upload type */
export interface TypeFilter {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>
}

/** Specifies how to filter by update datetime */
export interface UpdatedAtFilter {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>
}

/** Specifies how to filter by default alt */
export interface UploadAltFilter {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars["String"]["input"]>
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars["String"]["input"]>
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by auhtor */
export interface UploadAuthorFilter {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by basename */
export interface UploadBasenameFilter {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by colors */
export interface UploadColorsFilter {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>
}

/** Specifies how to filter by copyright */
export interface UploadCopyrightFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by creation datetime */
export interface UploadCreatedAtFilter {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>
}

/** Specifies how to filter by filename */
export interface UploadFilenameFilter {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export interface UploadFilter {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>
  _createdAt?: InputMaybe<UploadCreatedAtFilter>
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>
  alt?: InputMaybe<UploadAltFilter>
  author?: InputMaybe<UploadAuthorFilter>
  basename?: InputMaybe<UploadBasenameFilter>
  colors?: InputMaybe<UploadColorsFilter>
  copyright?: InputMaybe<UploadCopyrightFilter>
  filename?: InputMaybe<UploadFilenameFilter>
  format?: InputMaybe<UploadFormatFilter>
  height?: InputMaybe<UploadHeightFilter>
  id?: InputMaybe<UploadIdFilter>
  inUse?: InputMaybe<InUseFilter>
  md5?: InputMaybe<UploadMd5Filter>
  mimeType?: InputMaybe<UploadMimeTypeFilter>
  notes?: InputMaybe<UploadNotesFilter>
  orientation?: InputMaybe<OrientationFilter>
  resolution?: InputMaybe<ResolutionFilter>
  size?: InputMaybe<UploadSizeFilter>
  smartTags?: InputMaybe<UploadTagsFilter>
  tags?: InputMaybe<UploadTagsFilter>
  title?: InputMaybe<UploadTitleFilter>
  type?: InputMaybe<TypeFilter>
  width?: InputMaybe<UploadWidthFilter>
}

/** Specifies how to filter by format */
export interface UploadFormatFilter {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars["String"]["input"]>
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars["String"]["input"]>
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** Specifies how to filter by height */
export interface UploadHeightFilter {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars["IntType"]["input"]>
}

/** Specifies how to filter by ID */
export interface UploadIdFilter {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars["UploadId"]["input"]>
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars["UploadId"]["input"]>
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["UploadId"]["input"]>>>
}

/** Specifies how to filter by MD5 */
export interface UploadMd5Filter {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars["String"]["input"]>
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars["String"]["input"]>
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** Specifies how to filter by mime type */
export interface UploadMimeTypeFilter {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars["String"]["input"]>
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars["String"]["input"]>
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

/** Specifies how to filter by notes */
export interface UploadNotesFilter {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  Basename_ASC = "basename_ASC",
  Basename_DESC = "basename_DESC",
  Filename_ASC = "filename_ASC",
  Filename_DESC = "filename_DESC",
  Format_ASC = "format_ASC",
  Format_DESC = "format_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  MimeType_ASC = "mimeType_ASC",
  MimeType_DESC = "mimeType_DESC",
  Resolution_ASC = "resolution_ASC",
  Resolution_DESC = "resolution_DESC",
  Size_ASC = "size_ASC",
  Size_DESC = "size_DESC",
}

export enum UploadOrientation {
  Landscape = "landscape",
  Portrait = "portrait",
  Square = "square",
}

/** Specifies how to filter by size */
export interface UploadSizeFilter {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars["IntType"]["input"]>
}

/** Specifies how to filter by tags */
export interface UploadTagsFilter {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars["String"]["input"]>
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>
}

/** Specifies how to filter by default title */
export interface UploadTitleFilter {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars["String"]["input"]>
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars["BooleanType"]["input"]>
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars["String"]["input"]>
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>
}

export enum UploadType {
  Archive = "archive",
  Audio = "audio",
  Image = "image",
  Pdfdocument = "pdfdocument",
  Presentation = "presentation",
  Richtext = "richtext",
  Spreadsheet = "spreadsheet",
  Video = "video",
}

/** Specifies how to filter by update datetime */
export interface UploadUpdatedAtFilter {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars["DateTime"]["input"]>
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars["DateTime"]["input"]>
}

export interface UploadVideoField {
  __typename?: "UploadVideoField"
  duration?: Maybe<Scalars["Int"]["output"]>
  framerate?: Maybe<Scalars["Int"]["output"]>
  mp4Url?: Maybe<Scalars["String"]["output"]>
  muxAssetId: Scalars["String"]["output"]
  muxPlaybackId: Scalars["String"]["output"]
  streamingUrl: Scalars["String"]["output"]
  thumbnailUrl: Scalars["String"]["output"]
}

export interface UploadVideoFieldMp4UrlArgs {
  exactRes?: InputMaybe<VideoMp4Res>
  res?: InputMaybe<VideoMp4Res>
}

export interface UploadVideoFieldThumbnailUrlArgs {
  format?: InputMaybe<MuxThumbnailFormatType>
}

/** Specifies how to filter by width */
export interface UploadWidthFilter {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars["IntType"]["input"]>
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars["IntType"]["input"]>
}

export enum VideoMp4Res {
  High = "high",
  Low = "low",
  Medium = "medium",
}

export interface WorkModelBodyField {
  __typename?: "WorkModelBodyField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export interface WorkModelFilter {
  AND?: InputMaybe<Array<InputMaybe<WorkModelFilter>>>
  OR?: InputMaybe<Array<InputMaybe<WorkModelFilter>>>
  _createdAt?: InputMaybe<CreatedAtFilter>
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>
  _isValid?: InputMaybe<BooleanFilter>
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>
  _publishedAt?: InputMaybe<PublishedAtFilter>
  _status?: InputMaybe<StatusFilter>
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>
  _updatedAt?: InputMaybe<UpdatedAtFilter>
  bannerImage?: InputMaybe<FileFilter>
  body?: InputMaybe<StructuredTextFilter>
  createdAt?: InputMaybe<CreatedAtFilter>
  ctas?: InputMaybe<LinksFilter>
  heading?: InputMaybe<StringFilter>
  id?: InputMaybe<ItemIdFilter>
  information?: InputMaybe<StructuredTextFilter>
  internalName?: InputMaybe<StringFilter>
  seo?: InputMaybe<SeoFilter>
  slider?: InputMaybe<LinksFilter>
  slug?: InputMaybe<SlugFilter>
  subtitle?: InputMaybe<StringFilter>
  techStack?: InputMaybe<LinksFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<UpdatedAtFilter>
}

export interface WorkModelInformationField {
  __typename?: "WorkModelInformationField"
  blocks: Array<Scalars["String"]["output"]>
  links: Array<Scalars["String"]["output"]>
  value: Scalars["JsonField"]["output"]
}

export enum WorkModelOrderBy {
  _createdAt_ASC = "_createdAt_ASC",
  _createdAt_DESC = "_createdAt_DESC",
  _firstPublishedAt_ASC = "_firstPublishedAt_ASC",
  _firstPublishedAt_DESC = "_firstPublishedAt_DESC",
  _isValid_ASC = "_isValid_ASC",
  _isValid_DESC = "_isValid_DESC",
  _publicationScheduledAt_ASC = "_publicationScheduledAt_ASC",
  _publicationScheduledAt_DESC = "_publicationScheduledAt_DESC",
  _publishedAt_ASC = "_publishedAt_ASC",
  _publishedAt_DESC = "_publishedAt_DESC",
  _status_ASC = "_status_ASC",
  _status_DESC = "_status_DESC",
  _unpublishingScheduledAt_ASC = "_unpublishingScheduledAt_ASC",
  _unpublishingScheduledAt_DESC = "_unpublishingScheduledAt_DESC",
  _updatedAt_ASC = "_updatedAt_ASC",
  _updatedAt_DESC = "_updatedAt_DESC",
  CreatedAt_ASC = "createdAt_ASC",
  CreatedAt_DESC = "createdAt_DESC",
  Heading_ASC = "heading_ASC",
  Heading_DESC = "heading_DESC",
  Id_ASC = "id_ASC",
  Id_DESC = "id_DESC",
  InternalName_ASC = "internalName_ASC",
  InternalName_DESC = "internalName_DESC",
  Subtitle_ASC = "subtitle_ASC",
  Subtitle_DESC = "subtitle_DESC",
  Title_ASC = "title_ASC",
  Title_DESC = "title_DESC",
  UpdatedAt_ASC = "updatedAt_ASC",
  UpdatedAt_DESC = "updatedAt_DESC",
}

/** Record of type Work (work) */
export interface WorkRecord extends RecordInterface {
  __typename?: "WorkRecord"
  _createdAt: Scalars["DateTime"]["output"]
  _firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
  _isValid: Scalars["BooleanType"]["output"]
  _modelApiKey: Scalars["String"]["output"]
  _publicationScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _publishedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** SEO meta tags */
  _seoMetaTags: Array<Tag>
  _status: ItemStatus
  _unpublishingScheduledAt?: Maybe<Scalars["DateTime"]["output"]>
  _updatedAt: Scalars["DateTime"]["output"]
  bannerImage?: Maybe<FileField>
  body?: Maybe<WorkModelBodyField>
  createdAt: Scalars["DateTime"]["output"]
  ctas: Array<ButtonRecord>
  heading?: Maybe<Scalars["String"]["output"]>
  id: Scalars["ItemId"]["output"]
  information?: Maybe<WorkModelInformationField>
  internalName?: Maybe<Scalars["String"]["output"]>
  seo?: Maybe<SeoField>
  slider: Array<CaseStudyCardRecord>
  slug?: Maybe<Scalars["String"]["output"]>
  subtitle?: Maybe<Scalars["String"]["output"]>
  techStack: Array<TechStackRecord>
  title?: Maybe<Scalars["String"]["output"]>
  updatedAt: Scalars["DateTime"]["output"]
}

/** Record of type Work (work) */
export interface WorkRecord_SeoMetaTagsArgs {
  locale?: InputMaybe<SiteLocale>
}

export interface FocalPoint {
  __typename?: "focalPoint"
  x: Scalars["FloatType"]["output"]
  y: Scalars["FloatType"]["output"]
}

declare global {
  export type MyQueryQueryVariables = Exact<{ [key: string]: never }>

  export type MyQueryQuery = {
    __typename?: "Query"
    blogPost?: {
      __typename?: "BlogPostRecord"
      title?: string | null
      featuredImage?: {
        __typename?: "FileField"
        size: number
        url: string
        responsiveImage?: {
          __typename?: "ResponsiveImage"
          alt?: string | null
          src: string
          srcSet: string
          width: number
          height: number
          aspectRatio: number
          base64?: string | null
        } | null
      } | null
    } | null
  }
}
