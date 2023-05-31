import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { GlobalNavComponentQuery } from "@codegen/sdk"
import Link from "@molecules/Link"
import { GLOBAL_MAX_WIDTH, GLOBAL_PADDING } from "@molecules/Section"
import MobileSlideOut from "@components/GlobalNav/MobileSlideOut"
import makeServerQuery from "src/graphql/makeServerQuery"

const GlobalNav = async () => {
  const {
    _site: { favicon },
    // globalNav,
  } = await makeServerQuery<GlobalNavComponentQuery>(GlobalNavComponentQuery)

  const styles = {
    wrapper: [GLOBAL_PADDING, "w-screen z-10 fixed py-4", " lg:backdrop-blur-sm"],
    nav: [GLOBAL_MAX_WIDTH, "flex justify-between items-center "],
  }

  return (
    <div className={twMerge(styles.wrapper)}>
      <nav className={twMerge(styles.nav)}>
        <MobileSlideOut />
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
