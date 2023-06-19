import { ComponentPropsWithoutRef, FC, Fragment } from "react"
import { cva } from "class-variance-authority"
import Button from "@molecules/Button"
import Icon from "@molecules/Icon"

interface BreadcrumbsProps extends ComponentPropsWithoutRef<"div"> {
  breadcrumbs: {
    label: string
    link?: string
  }[]
}

const buttonStyles = cva(["text-gray-700 dark:text-gray-700", "w-fit"], {
  variants: {
    last: {
      true: ["pointer-events-none", "text-purple-400 dark:text-common-white"],
    },
  },
})

export const BreadCrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <div className="mb-8 flex items-center gap-4">
      {breadcrumbs.map((breadcrumb, index) => (
        <Fragment key={breadcrumb.label}>
          {index !== 0 && <Icon id="chevron-right" size={12} />}
          <Button
            size="md"
            variant="text"
            url={breadcrumb.link}
            className={buttonStyles({ last: index === breadcrumbs.length - 1 })}
          >
            {breadcrumb.label}
          </Button>
        </Fragment>
      ))}
    </div>
  )
}
