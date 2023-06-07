import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { GlobalNavComponentQuery } from "@codegen/sdk"
import Link from "@molecules/Link"
import { GLOBAL_MAX_WIDTH, GLOBAL_PADDING } from "@molecules/Section"
import MobileSlideOut from "@components/GlobalNav/MobileSlideOut"
import NavMenu from "@components/GlobalNav/NavMenu"
import makeServerQuery from "@utils/makeServerQuery"

const GlobalNav = async () => {
  const {
    _site: { favicon },
    globalNav,
  } = await makeServerQuery<GlobalNavComponentQuery>(GlobalNavComponentQuery)

  const styles = {
    wrapper: [GLOBAL_PADDING, "w-screen z-10 fixed py-2", "lg:backdrop-blur-sm"],
    nav: [
      GLOBAL_MAX_WIDTH,
      "flex justify-between items-center lg:flex-row-reverse",
      "after:h-px after:bg-gray-700 after:absolute after:bottom-0 lg:after:w-9/12 after:left-1/2 after:-translate-x-1/2 after:max-w-6xl",
    ],
  }

  return (
    <div className={twMerge(styles.wrapper)}>
      <nav className={twMerge(styles.nav)}>
        <MobileSlideOut logo={favicon} links={globalNav?.links} className="lg:hidden" />
        <NavMenu links={globalNav?.links} className="hidden lg:flex" />
        {favicon?.url && (
          <Link href="/">
            <Image src={favicon?.url} width={50} height={50} alt={favicon.alt || ""} />
          </Link>
        )}
      </nav>
    </div>
  )
}

export default GlobalNav
