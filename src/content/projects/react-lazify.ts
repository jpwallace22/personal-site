import { defineProject, mdx } from "src/content/schema"

export default defineProject({
  slug: "react-lazify",
  title: "React Lazify",
  subtitle: "A lazy way to make lazy imports",
  heading: "A VS Code extension for React",
  excerpt: mdx`
    Recognizing the need for an efficient approach to update codebases with lazy/dynamic imports with the release of React v18, I developed a versatile and extensible VS Code extension to automate the process.
  `,
  body: mdx`
    [React Lazify](https://github.com/jpwallace22/react-lazify) is a lazy way to write lazy imports (see what I did there?). Back with the release of React 18, Next13, and Gatsby 5, I've found myself making a LOT more lazy imports and needing to go back to refactor old sites as we upgraded. I found myself having to go through and re-write a ton of imports. Thus an extension was born.

    Instead of just writing a quick bash script or codemod, I figured I would take the time to make something a bit more robust and shareable. (This was also for fun) Now I am maintaining my own VS code extension and am already starting to iterate on it too.&#x20;

    > **Note**<em><strong>: </strong></em>*This might be slightly out of date with the current version of the extension*

    <div><BtnGroup><Btn variant="contained" label="Repository" url="https://github.com/jpwallace22/react-lazify" startIcon="" endIcon="github" /><Btn variant="outlined" label="VS Code Marketplace" url="https://marketplace.visualstudio.com/items?itemName=jpwallace22.react-lazify" startIcon="" endIcon="external" /></BtnGroup></div>
  `,
  extraInformation: mdx`
    ### Key Points

    - Created to solve the problem of needing to convert a large number of imports

    - Currently 98% test coverage (macOS, Windows, & Linux) with Mocha&#x20;

    - Published to the VS Code marketplace for free use by anyone

    - A larger longer write up can be found[ on my blog](https://www.justinwallace.dev/blog/building-my-first-vs-code-extension)

    - I still maintain this project and iterate on it (over 500 downloads! yay!)
  `,
  bannerImage: {
    url: "https://www.datocms-assets.com/85391/1686280440-react-lazy-1.png",
    alt: "The logo for React Lazify. Its a react logo with sleeping Z's",
    width: 537,
    height: 526,
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
      title: "Mocha",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1673727280-mocha.png",
        alt: "",
        width: 170,
        height: 192,
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
      title: "VS Code",
      thumbnail: {
        url: "https://www.datocms-assets.com/85391/1673727354-pngwing-com-2-edited.png",
        alt: "",
        width: 436,
        height: 435,
      },
    },
  ],
  switchbacks: [
    {
      heading: "Basic functionality",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1673670376-demo.gif",
        alt: "A gif showing the basic function of React Lazify",
        width: 800,
        height: 450,
      },
      bgColor: "",
      body: mdx`
        This shows the basic functionality of the extension, which is quite simple.

        - Select an import with your cursor

        - <div><Code><strong>ctrl+alt+cmd+L</strong></Code></div>

        - Supports multiple cursor selections and highlighted selections
      `,
    },
    {
      heading: "Works from the JSX too!",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1679542520-jsx_demo.gif",
        alt: "A demonstration of the React Lazify extension working within the JSX return",
        width: 800,
        height: 514,
      },
      bgColor: "",
      body: mdx`
        - Select the component you wish to covert within the JSX return

        - Use the keyboard shortcut <Code><strong>ctrl+opt+cmd+L</strong></Code> to make it lazy

        - Supports selections with multiple cursors and highlighting&#x20;

        - will STILL ignore non-default imports even if selected
      `,
    },
    {
      heading: "Unit tests with Mocha",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687138063-screen-shot-2023-06-18-at-6-26-17-pm.png",
        alt: "",
        width: 1010,
        height: 681,
      },
      bgColor: "",
      body: mdx`
        Tested on Mac, Linux, and Windows OS with 98% test coverage. Though I would typically prefer to write my tests with Jest. Mocha integrates well with the VS Code environment and its always better to choose the right tool for the job.
      `,
    },
    {
      heading: "Slowly gaining popularity",
      headingAs: "h3",
      image: {
        url: "https://www.datocms-assets.com/85391/1687125670-screen-shot-2023-06-18-at-3-00-04-pm.png",
        alt: "",
        width: 1796,
        height: 910,
      },
      bgColor: "",
      body: mdx`
        With a VS code marketplace ranking of 5 stars, 9 Github stars, and 259 downloads (as of writing this) it's starting to gain (a very little bit) of popularity. It's just nice to build software that people are using!
      `,
    },
  ],
  seo: {
    title: "React Lazify",
    description:
      "Showcasing my first VS Code extension React Lazify. A lazy way to make lazy imports. ",
    image: {
      url: "https://www.datocms-assets.com/85391/1673585712-react-lazify-twitter.png",
      alt: "",
      width: 1686,
      height: 882,
    },
  },
})
