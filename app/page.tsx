import BlogListing from "@components/BlogListing"
import Carousel from "@components/Carousel"
import Footer from "@components/Footer"
import StaticHero from "@components/Hero/StaticHero"
import ProjectListing from "@components/ProjectsListing"
import Switchback from "@components/Switchback"
import TrustBar from "@components/TrustBar"
import { getFeaturedBlogPosts, getFeaturedProjects } from "src/content"
import { mdx } from "src/content/schema"
import { testimonials } from "src/content/testimonials"

const Home = () => (
  <>
    <StaticHero />
    <TrustBar />
    <Switchback
      heading="A bit about me"
      headingAs="h2"
      sectionId="about"
      bgColor="purple-400"
      designAccent="dots"
      image={{
        url: "https://www.datocms-assets.com/85391/1687393096-headshot-lobster-website.png",
        alt: "A headshot of Justin Wallace wearing a cool shirt with lobsters on it",
        width: 700,
        height: 821,
      }}
      priority
      body={mdx`
        I am a dedicated and driven T-shaped software engineer with a passion for fantastic frontends, intuitive interfaces, adept APIs, and alliteration. My educational and professional backgrounds combined with my **product-oriented mindset** enable me to create accessible modern user experiences that resonate.

        I am currently a Sr. Software Engineer with NVIDIA where we are empowering the world to build the next generation of AI applications. Though I have been in the AI field for years, I love to dabble and am **always learning**. I have an obsession with writing clean, readable, well-tested, and scalable code regardless of language or framework.

        I feel my greatest assets as an engineer are **my grit, communication, curiosity, and product mindset.** Building things is amazing, but watching them succeed is even amazing-er! 🤓

        <div><BtnGroup><Btn variant="contained" label="More about" url="https://www.justinwallace.dev/about" startIcon="" endIcon="" /><Btn variant="outlined" label="My Github" url="https://www.github.com/jpwallace22" startIcon="" endIcon="github" /></BtnGroup></div>
      `}
    />
    <Carousel cards={testimonials} />
    <ProjectListing
      heading="Some Projects"
      headingAs="h2"
      sectionId="homepage-projects"
      bgColor=""
      cards={getFeaturedProjects()}
      body={mdx`
        This section showcases a curated collection of endeavors that blend my<strong> passion</strong> for software engineering with both professional and leisure pursuits. From *innovative work solutions to whimsical experiments*, each project is a testament to my dedication to exploring the vast possibilities of technology (or just building things I want). This is not just a reflection of my skills but a journey through the challenges I've embraced and the fun I've had along the way. 🙌🏼
      `}
    />
    <BlogListing
      heading="Featured Blogs"
      headingAs="h2"
      cards={getFeaturedBlogPosts()}
      body={mdx`<p></p>`}
    />
    <Footer full />
  </>
)

export default Home
