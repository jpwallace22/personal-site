import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: "webstacks-ui-library",
  title: "Webstacks UI Library",
  subtitle: "And a template repository too",
  heading: "Framework Agnostic Template Repository",
  excerpt: mdx`
    A complete React UI/component library boasting SSR support, fully customizable responsive elements, and dark mode out of the box. Currently in production by 30+ tech companies including industry giants like Freshworks.
  `,
  body: mdx`
    <div><strong>Problem: </strong>Onboarding new clients and implementing unique non-templated designs for each of them took a lot of manpower from the engineering team. (especially when you need to support multiple frameworks)</div>

    <div><strong>Solution: </strong> I, along with two others, architected and developed a framework-agnostic highly extensible template repository/UI library. The library consists of all your basic UI elements, atomic design variables, and all supporting documentation (with Storybook) for its use. </div>

    The library is currently <strong>in production by 30+ </strong>large to medium-scale tech companies including [Freshworks](https://www.freshworks.com/), [Justworks](https://www.justworks.com/), & [Snowflake.](https://learn.snowflake.com/en/)  Check them out!
  `,
  extraInformation: mdx`
    ### Key Points

    - This library is currently <strong>in production by 30+ </strong>large to medium-scale tech companies including Freshworks, Justworks, & Snowflake.&#x20;

    - Developed by a small team with high levels of communication (regarding complex ideas, architecture, and strategy) and collaboration.

    - Personally managed and maintained the UI library as an internal open-source project.&#x20;

    - Built with developer experience and development speed as the two main priorities to ensure we could pass it off to contractors and not have to worry about ramp time.&#x20;
  `,
  bannerImage: {
    url: "https://www.datocms-assets.com/85391/1668970289-webstacks-1.webp",
    alt: "A computer screen with showing different aspects of web design",
    width: 650,
    height: 650,
  },
  techStack: [
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
      title: "MUI",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115095-mui.png",
        alt: "",
        width: 820,
        height: 820,
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
      title: "Storybook",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115063-storybook.svg",
        alt: "",
        width: 19,
        height: 23,
      },
    },
    {
      title: "Jest",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1675826052-jest-js-icon.png",
        alt: "",
        width: 512,
        height: 512,
      },
    },
  ],
  switchbacks: [
    {
      heading: "Atomic design principles (Colors)",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1668970537-webstacks-2.gif",
        alt: "Gif showing the UI library storybook",
        width: 800,
        height: 426,
      },
      bgColor: "",
      body: mdx`
        Here you can see the Storybook section for the colors. Just one of the many building blocks of the UI library. Aka, the atoms. Since the UI library also functions as a template repository, the atoms must remain flexible and easy to change.&#x20;

        This shows the storybook switching between light and dark modes. Light and dark functionality us baked in with a context.&#x20;
      `,
    },
    {
      heading: "Typography atom",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1668970564-webstacks-4.webp",
        alt: "Gif showing the UI library storybook",
        width: 800,
        height: 427,
      },
      bgColor: "",
      body: mdx`
        The typography atom is another essential building block of any good UI library. Like colors, it was imperative that this stayed equally as easy to change. The Webstacks UI library uses a Tailwind-esque naming system for its theme.&#x20;
      `,
    },
    {
      heading: "Circular progress indicator",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1668970549-webstacks-3.gif",
        alt: "Gif showing the UI library storybook",
        width: 800,
        height: 426,
      },
      bgColor: "",
      body: mdx`
        This is just one of many "molecules" within the UI library that are used to create full-fledged components. The molecules are highly accessible and well documented UI components like switches and text fields that build the foundation of good components.&#x20;
      `,
    },
    {
      heading: "Test Driven Development",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1675826357-screen-shot-2023-02-07-at-7-18-33-pm.png",
        alt: "Passing unit tests",
        width: 1234,
        height: 646,
      },
      bgColor: "",
      body: mdx`
        All utilities and functions are tested with the Jest unit testing package. The library is tested end-to-end for visual and interaction changes using Chromatic (from the creators of Storybook).
      `,
    },
  ],
  seo: {
    title: "Webstacks UI Library",
    description:
      "Showcasing my roles and responsibilities in the production of the Webstacks internal UI library, as well as some of its features. ",
    image: {
      url: "https://www.datocms-assets.com/85391/1668970289-webstacks-1.webp",
      alt: "A computer screen with showing different aspects of web design",
      width: 650,
      height: 650,
    },
  },
})
