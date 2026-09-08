import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: "solana",
  title: "Solana Component Library",
  subtitle: "React components for a Rust blockchain",
  heading: "Modern React Component/UI Library",
  excerpt: mdx`
    Lead engineer for a modern UI/Component library (npm package) to be used for Solana's NextJS site. The contains your smaller UI elements like buttons as well as full components.&#x20;
  `,
  body: mdx`
    <div><strong>Problem: </strong>Solana didn't have an effective method to create new pages on their marketing site without having it done by an engineer. </div>

    **Solution:** Spearheaded the development of an industry-leading component library for Solana using React, TypeScript, Tailwind, & Storybook and seamlessly integrated it into Solana’s NextJS website with Builder.io for accelerated development cycles and heightened productivity.

    From buttons and icons to heroes and card decks, the library had everything necessary to quickly and efficiently create a stunning website.&#x20;

    <div><Btn variant="contained" label="Check it out" url="https://www.solana.com" startIcon="" endIcon="external" /></div>
  `,
  extraInformation: mdx`
    ### Key Points

    - My responsibilities included every aspect of the SDLC from choosing the tech stack to the CI/CD pipeline and everything in between

    - Highly composable and well-documented component library

    - Solved the problem of the client not having a way to effectively build new pages

    - Optimized, tree-shakable components with injected styles for maximum modularity&#x20;&#x20;
  `,
  bannerImage: {
    url: "https://www.datocms-assets.com/85391/1688227057-floating-logo-set-copy.webp",
    alt: 'The word "Solana" set in front of a stylized glass "S"',
    width: 658,
    height: 411,
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
      title: "React",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1668918463-react.svg",
        alt: "React Logo",
        width: 3454,
        height: 3059,
      },
    },
    {
      title: "Tailwind",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1686280578-tailwind_css_logo-svg.png",
        alt: "",
        width: 2048,
        height: 2048,
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
      title: "Node",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115006-node.svg",
        alt: "",
        width: 2270,
        height: 2500,
      },
    },
  ],
  switchbacks: [
    {
      heading: "Built as an NPM package",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1688314710-solana-slider.gif",
        alt: "Storybook display of the Solana slider component",
        width: 800,
        height: 559,
      },
      bgColor: "",
      body: mdx`
        The library is a comprehensive and modular NPM package bundled with [Rollup](https://rollupjs.org/) and [PostCSS](https://postcss.org/) using a component-centric approach for efficient style management (injecting styles at the component level).&#x20;

        The library enables developers to create scalable and maintainable applications, leveraging industry-standard practices
      `,
    },
    {
      heading: "Strongly typed",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1688315655-solana-qhote.gif",
        alt: "",
        width: 800,
        height: 559,
      },
      bgColor: "",
      body: mdx`
        <div><strong>What's the point of an NPM package if it's not strongly typed? </strong>The API for every component is strongly typed with literals and accompanied by JSDoc notations for improved intellisense and developer experience. </div>

        Proper typing and documentation are equally important as performance optimizations if you ask me.&#x20;
      `,
    },
    {
      heading: "Gradients, glows, and animations, oh my! ",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1688330750-solana-stats.gif",
        alt: "",
        width: 800,
        height: 559,
      },
      bgColor: "",
      body: mdx`
        Solana not only leverages the cutting edge of the modern jamstack, but it stays at the forefront of current design techniques while still maintaining its top-notch performance metrics. Knowing **when and how to perform animations when rending from the server** is a more modern challenge.&#x20;
      `,
    },
    {
      heading: "A unique approach to Icons",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1688331352-solana-cicons.gif",
        alt: "",
        width: 800,
        height: 559,
      },
      bgColor: "",
      body: mdx`
        I created a single Icon "molecule" that renders SVG's from a singular sprite. The sprite is created (and optimized) at build time from all SVG's in the icons directory. Being strongly typed, rendering the icon you need is as easy as \`\`<Icon id="x-close" />\`\`
      `,
    },
  ],
  seo: {
    title: "Solana UI Library",
    description:
      "I led the development efforts for the Solana UI/Component library that is currently used on their Next site (Solana.com)",
    image: {
      url: "https://www.datocms-assets.com/85391/1688226556-solana-768x479.png",
      alt: "",
      width: 768,
      height: 479,
    },
  },
})
