import { type Image, mdx } from "src/content/schema"

export interface FeatureCard {
  heading: string
  body: string
  image: Image
}

export const aboutHeading = "More than just an engineer"

export const aboutBody = mdx`
  From my humble beginnings to standing on mountains and everything in between. I am always trying to live to my fullest and show passion in everything I do.&#x20;

  > Here are a couple of snippets of my life to help paint a better picture of just who I am.
`

export const featureCards: FeatureCard[] = [
  {
    heading: "Started with living in a van",
    image: {
      url: "https://www.datocms-assets.com/85391/1681696294-aac.png",
      alt: "",
      width: 1201,
      height: 1201,
    },
    body: mdx`
      &#x20;I started a blog to document my journey of traveling in a van and rock climbing. It was the creation of this blog that ignited my passion for the web and pushed me to end a 13+ year career with the Navy to follow my dreams.
    `,
  },
  {
    heading: "Problem solving on the wall 🧗🏼",
    image: {
      url: "https://www.datocms-assets.com/85391/1687393191-climbing-1.png",
      alt: "Justin Wallace rock climbing in Red Rock Nevanda",
      width: 639,
      height: 710,
    },
    body: mdx`
      As I mentioned previously, rock climbing has been a major part of my life. The art of climbing a mountain is the perfect combination of **preparation, dedication, and critical problem-solving**.
    `,
  },
  {
    heading: "From mountains to the sea",
    image: {
      url: "https://www.datocms-assets.com/85391/1687393264-surfing-1.png",
      alt: "",
      width: 700,
      height: 811,
    },
    body: mdx`
      Surfing was the primary reason that I moved to San Diego in 2010 and though I don't paddle out as much as I would like to, (I live 8 miles from the beach now 😱) it still has a strong hold over me.

      <p></p>
    `,
  },
  {
    heading: "Just being kinda goofy",
    image: {
      url: "https://www.datocms-assets.com/85391/1687393340-surfing-2.png",
      alt: "",
      width: 700,
      height: 618,
    },
    body: mdx`
      Life is more than just writing code and extreme sports. You need to know when to take it easy and **just be a little goofy**! I love to smile and I love to make others smile. 🫶
    `,
  },
  {
    heading: "Husband and dog dad",
    image: {
      url: "https://www.datocms-assets.com/85391/1681701894-husband.png",
      alt: "",
      width: 674,
      height: 904,
    },
    body: mdx`
      Last and <em>far from least </em>I am the husband to an extremely amazing, motivating partner and father to the world's cutest little nugget.<em> Lauren and Achilles are the rocks in my life</em>. **They are perfect**.
    `,
  },
]
