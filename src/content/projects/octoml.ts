import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: "octoml",
  title: "OctoAI (OctoML) Marketing Site ",
  subtitle: "Automate Model Deployment",
  heading: "A Headless SSG Marketing Site",
  excerpt: mdx`
    Headless marketing site with GraphQL, DatoCMS, and GatsbyJS. With OctoML I managed the full SDLC, CI/CD pipeline setup, linting standards, code reviews, sprint planning, and UX design review.&#x20;
  `,
  body: mdx`
    While working at Webstacks as the lead developer for OctoAI, I had the pleasure of being able to take responsibility for an entire repository. I owned the software development lifecycle from establishing the CI/CD pipeline to creating the linting standards. I was also responsible for peer and junior code reviews, sprint planning, and UX design reviews.

    **Problem:** Content creators were limited in the choices they had and needed more control over their site. Each page was a separate content model and engineers were required to create new unique pages.

    **Solution:** We solved this with a component generation model based on DatoCMS and GraphQL queries to dynamically create page sections. The system (the same pattern used in this site) allowed the content creators to create complete pages within minutes with nearly complete control over everything.&#x20;

    I was later hired by OctoAI to join their platform team as a Senior Engineer and was able to refer an engineer to take over their marketing site. Though no longer responsible for the site, I still help consult and do the occasional PR review.&#x20;

    > <div><em>Note: This has been redesigned since the initial development of it. </em></div>

    <div><Btn variant="contained" label="Check it out" url="https://www.octoml.ai" startIcon="" endIcon="external" /></div>
  `,
  extraInformation: mdx`
    ### Key Points

    - The first project that I was able to take full control of/was responsible for.

    - Worked directly with OctoAI stakeholders (and even got job out of it) to provide an optimized experience for their content creators.&#x20;

    - Modeled with DatoCMS and queried with GraphQL utilizing fragments and GraphQL Codegen for the types.

    - Includes full documentation for use of components created with Storybook.
  `,
  bannerImage: {
    url: "https://www.datocms-assets.com/85391/1668970974-octoml-1.png",
    alt: "UI of OctoML",
    width: 800,
    height: 814,
  },
  techStack: [
    {
      title: "Gatsby",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115002-gatsby.svg",
        alt: "",
        width: 256,
        height: 256,
      },
    },
    {
      title: "React",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1668918463-react.svg",
        alt: "React Logo",
        width: 3454,
        height: 3059,
      },
    },
    {
      title: "Typescript",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115061-typescript.svg",
        alt: "",
        width: 2500,
        height: 2500,
      },
    },
    {
      title: "Styled Components",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115103-styledcomponents.png",
        alt: "",
        width: 225,
        height: 225,
      },
    },
    {
      title: "DatoCMS",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115206-dato.svg",
        alt: "",
        width: 94,
        height: 95,
      },
    },
    {
      title: "GraphQL",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115005-graphql.svg",
        alt: "",
        width: 456,
        height: 512,
      },
    },
  ],
  switchbacks: [
    {
      heading: "Animated Homepage",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1669503945-homepage.gif",
        alt: "",
        width: 600,
        height: 382,
      },
      bgColor: "",
      body: mdx`
        The animated variant of the hero utilized framer motion to create smooth multi-leveled animations at all large breakpoints. Each circle has two circles revolving around them as well as a flag that pivots up.&#x20;
      `,
    },
    {
      heading: " Conversion panel and footer",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1669503961-footer.gif",
        alt: "",
        width: 600,
        height: 383,
      },
      bgColor: "",
      body: mdx`
        The animated conversion panel and footer are two separate components. The conversion panel has multiple variants and is modeled to give content creators a lot of control.

        Pictured here is just one of the variants that includes a couple animated atoms that move on repeat and an octopus that pops up on hover.&#x20;
      `,
    },
    {
      heading: "Featured grid component",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1669503955-feature-grid.gif",
        alt: "A demonstration of the OctoML feature grid component",
        width: 600,
        height: 383,
      },
      bgColor: "",
      body: mdx`
        This component utilizes the scroll position, state, and clever use of a background gradient to create the dotted line when scrolling.

        This was a very fun component to create and I feel as though It makes for an appealing UX.&#x20;
      `,
    },
    {
      heading: "The Global Navbar",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1669503966-nav.gif",
        alt: "",
        width: 600,
        height: 383,
      },
      bgColor: "",
      body: mdx`
        The one and only global navigation component (or global header/navbar). The first to be judged and utilized by all. As you can see OctoML follows modern design standards with icons, sections, and images. Best of all though, **it's 100% headless**.
      `,
    },
  ],
  seo: {
    title: "OctoAI Marketing Site",
    description:
      "With OctoML i was responsible for peer and junior code reviews, sprint planning, UX design review, and much much more. ",
    image: {
      url: "https://www.datocms-assets.com/85391/1668971482-octoml-2.png",
      alt: "The homepage of OctoML",
      width: 1386,
      height: 909,
    },
  },
})
