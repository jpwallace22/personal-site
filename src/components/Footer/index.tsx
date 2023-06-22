import { cva } from "class-variance-authority"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { SiteMetaDataQuery } from "@codegen/sdk"
import Link from "@molecules/Link"
import Section from "@molecules/Section"
import Socials from "@molecules/Socials"
import makeServerQuery from "@utils/makeServerQuery"
import logoPath from "src/assets/images/logo-gradient.webp"

const wrapper = cva(["grid", "place-items-center", "h-[65dvh]", "relative"], {
  variants: {
    full: {
      true: ["h-[100dvh]"],
    },
  },
})
const link = cva([
  "text-gradient-primary",
  "underline-animation",
  "mb-10",
  "text-7xl",
  "text-purple-900",
  "dark:text-common-white",
  "transition-all",
  "duration-300",
  "after:-bottom-5",
  "after:h-2",
  "after:gradient-primary",
  "hover:text-transparent",
  "hover:dark:text-transparent",
  "md:text-8xl",
])
const Footer = async ({ full }: { full?: boolean }) => {
  const {
    _site: { favicon },
  } = await makeServerQuery<SiteMetaDataQuery>(SiteMetaDataQuery)

  return (
    <Section
      id="page-footer"
      as="footer"
      className={twMerge(wrapper({ full }))}
      wrapperClass="bg-gray-50 dark:bg-purple-900 gradient-radial-mono border-t dark:border-gray-900 border-gray-500"
    >
      <div className="flex flex-col items-center gap-4 pb-10 md:flex-row md:gap-8">
        <Image
          src={logoPath}
          width={132}
          height={132}
          alt="A take on the Typescript logo with JW in the place of TS"
          className="self-center md:self-start"
        />
        <div className="pt-4 text-center md:text-left">
          <Link href="https://calendly.com/jpwallace22">
            <p className="eyebrow">Well, what are you waiting for?</p>
            <h2 className={link()}>Let&apos;s Chat</h2>
          </Link>
          <Socials size="md" className="justify-center md:justify-start" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex h-12 items-end justify-center pb-4 sm:justify-between">
        {favicon?.url && (
          <Link href="/" className="hidden sm:block">
            <Image src={favicon?.url} width={45} height={45} alt={favicon.alt || ""} />
          </Link>
        )}
        <small className="text-md text-center leading-none">
          {`Designed & Developed by ©JW Development 2019-${new Date().getFullYear()} • `}
          <Link href="/resume.pdf" className="text-purple-400 dark:text-common-white" download>
            Resume
          </Link>
        </small>
      </div>
    </Section>
  )
}

export default Footer
