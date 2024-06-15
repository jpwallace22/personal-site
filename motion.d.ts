import { HTMLMotionProps as Base } from "framer-motion"

declare module "framer-motion" {
  export type HTMLMotionProps<T> = Base<T> & {
    className?: string
  }
}
