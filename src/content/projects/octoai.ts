import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: "octoai",
  title: "OctoAI SaaS platform",
  subtitle: "Run, tune, & scale generative AI in the cloud",
  heading: "A multimedia generative AI platform",
  excerpt: mdx`
    Owned and led the development of the frontend architecture for a cutting-edge AI SaaS/IaaS platform, expertly leveraging modern tech on the bleeding edge including Remix, React 19, TypeScript, and RESTful Golang APIs and microservices.
  `,
  body: mdx`
    As a staff engineer, I owned and led the frontend development for an advanced multimedia generative AI SaaS platform, utilizing a contemporary tech stack comprised of Remix, React, Express, TypeScript, and RESTful Golang APIs and microservices.&#x20;

    My responsibilities spanned the complete lifecycle of the product, from initial architecture design through to deployment and ongoing maintenance. I collaborated closely with cross-functional teams, including UX designers, backend, and MLsys engineers to ensure seamless integration and optimal performance.&#x20;
  `,
  extraInformation: mdx`
    - The product is still very young, but we make great strides forward every day. So there is a 99% chance that we have already improved from what is seen here.&#x20;

    - We have a small UX team that runs the frontend, but every feature is highly collaborative and cross-functional.&#x20;

    - Runs on the bleeding edge. At the time of writing this, I just pushed the migration to \`\`react@rc\`\`.
  `,
  bannerImage: {
    url: "https://www.datocms-assets.com/85391/1712370871-image-gen-card.webp",
    alt: "OctoAI Image Gen",
    width: 570,
    height: 300,
  },
  techStack: [
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
      title: "Vite",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1680129419-logo-with-shadow.png",
        alt: "",
        width: 640,
        height: 640,
      },
    },
    {
      title: "Remix",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1709264477-64235328.png",
        alt: "remix logo",
        width: 200,
        height: 200,
      },
    },
    {
      title: "Go",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1712374263-o6aczwfv_400x400.png",
        alt: "",
        width: 400,
        height: 400,
      },
    },
  ],
  switchbacks: [
    {
      heading: "Media Gen",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1715533915-screenrecording2024-05-12at10-01-57am-ezgif-com-video-to-gif-converter-1.gif",
        alt: "",
        width: 800,
        height: 469,
      },
      bgColor: "",
      body: mdx`
        This Image Generation Service aims to provide users with a seamless and intuitive platform for generating high-quality images/animations using cutting-edge generative AI technology. The WebUI enables users the ability to:

        - Generate Images with complete customizability&#x20;

        - Upload and use their own LoRA's, checkpoints, or textual inversions&#x20;

        - Create animations from their generated images

        And more!&#x20;
      `,
    },
    {
      heading: "Text Gen",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1717859616-screenrecording2024-06-08at8-05-47am-ezgif-com-video-to-gif-converter.gif",
        alt: "demo of the OctoAI text generation",
        width: 800,
        height: 446,
      },
      bgColor: "",
      body: mdx`
        Our project aimed to enhance a generative AI text generation service, hosting the latest large language models (LLMs) for inference.&#x20;

        The speed of change in AI means we needed to build a flexible system that allowed us to add/remove models quickly, use multiple chat API formats (streaming and non), and show users dynamically generated code snippets for our SDKs.&#x20;
      `,
    },
    {
      heading: "Asset Library",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1717860338-screenrecording2024-06-08at8-21-44am-ezgif-com-video-to-gif-converter.gif",
        alt: "A demo of the OctoAI asset library",
        width: 800,
        height: 446,
      },
      bgColor: "",
      body: mdx`
        The OctoAI Asset Library is where users manage their upload assets such as checkpoints, LoRA's, controlnets, and textual inversions. These assets can easily push into the double digits of GB in size and needed a robust upload pipeline to support them.&#x20;

        More than just a CRUD, these assets are deep linked to image generation so users can users them  when generating images or animations.
      `,
    },
  ],
  seo: {
    title: "OctoAI",
    description: "Empowering builders to launch the next generation of AI applications.",
  },
})
