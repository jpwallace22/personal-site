import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: "this-site",
  title: "This Website",
  subtitle: "So Meta",
  heading: "The ever changing and evolving",
  excerpt: mdx`
    Initially conceived as a class project with a tight timeline, it has evolved into its present form—a statically generated, headless website created with TypeScript, NextJS RSC,  and Tailwind with CVA. Leveraging GraphQL delivered from DatoCMS.
  `,
  body: mdx`
    This portfolio site goes beyond being a mere showcase of my work; it embodies the essence of my craftsmanship, and it would be remiss not to delve into its creation process and evolutionary journey.

    My site started as a class project with a 5-week deadline (design, development, and style guide) with hardcoded content and has transformed into what you see today. Now, it's headless (DatoCMS & GraphQL), ISR, Typescript, Next, and, the latest addition, Tailwind.

    <div><Btn variant="contained" label="Repository" url="https://github.com/jpwallace22/personal-site" startIcon="" endIcon="github" /></div>
  `,
  extraInformation: mdx`
    ### Key Points

    - Built with NextJS (app dir), DatoCMS utilizing SSG, ISR, and GraphQL

    - Styled with, Tailwind, \`\`class-variance-authority\`\`, and love

    - 100% designed, developed, and maintained by yours truly

    - CICD pipeline, Semantic-release, unit-testing, end-to-end testing

    - The **website and the code speak for themselves**. If for no other, you should check out the repo for this.&#x20;

    <div><Btn variant="contained" label="Repository" url="https://github.com/jpwallace22/personal-site" startIcon="" endIcon="github" /></div>
  `,
  bannerImage: {
    url: "https://www.datocms-assets.com/85391/1678640621-thissite.png",
    alt: "Justin Wallace's personal logo",
    width: 606,
    height: 605,
  },
  techStack: [
    {
      title: "NextJS",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1670115091-next.jpg",
        alt: "",
        width: 629,
        height: 629,
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
      title: "Tailwind",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1686280578-tailwind_css_logo-svg.png",
        alt: "",
        width: 2048,
        height: 2048,
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
      heading: "Light mode style tile",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1668973094-thissite-3.webp",
        alt: "Light colored style tile for this site",
        width: 1387,
        height: 897,
      },
      bgColor: "",
      body: mdx`
        **Back to the basics**! The first thing I did when creating this site was styling. I started with my basic logo and went from there. This is the original design for my light mode. As you can see, not much has changed.&#x20;

        This was also the debut of my new logo. I still maintain my original logomark, but this put a development spin on it.&#x20;
      `,
    },
    {
      heading: "Dark style (the new default)",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1668973089-thissite-2.webp",
        alt: "Style tile for this site",
        width: 1386,
        height: 900,
      },
      bgColor: "",
      body: mdx`
        The dark mode style is near and dear to me (hence why it's the default). Obviously, I have the ability to make it use the browser preference, but I WANT people to see the dark mode. Not to mention this is a dev site.. for developers. Dark mode is where it's at.&#x20;
      `,
    },
    {
      heading: "Unit Testing with Jest",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687140620-ezgif-com-video-to-gif-4.gif",
        alt: "",
        width: 600,
        height: 433,
      },
      bgColor: "",
      body: mdx`
        Currently, all utilities, hooks, and molecules are unit tested for a total of about 86% coverage. I know, not great and nothing to boast about. However, as soon as I can get this new version launched I will continue to finish the tests.&#x20;
      `,
    },
    {
      heading: "Performance matters",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687402261-lighthouse.png",
        alt: "",
        width: 825,
        height: 453,
      },
      bgColor: "",
      body: mdx`
        Not only is the codebase built to scale, <strong>but it's also built to be performant. </strong>

        Though using Next13's default React server components makes it pretty easy, it still makes you need to rethink your state management and architecture. In doing so I was able to hit 100 on all required KPI's for the lighthouse ranking system
      `,
    },
  ],
  seo: {
    title: "This site",
    description:
      "The inner workings of this site and why it is highlighted in my portfolio. This site is made with the latest frameworks, technologies, and tooling. ",
    image: {
      url: "https://www.datocms-assets.com/85391/1668973094-thissite-3.webp",
      alt: "Light colored style tile for this site",
      width: 1387,
      height: 897,
    },
  },
})
