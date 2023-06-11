import { ComponentPropsWithoutRef, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

interface DrawnArrowProps extends VariantProps<typeof drawnArrow>, ComponentPropsWithoutRef<"svg"> {}

const drawnArrow = cva(["text-purple-400 dark:text-primary-500"], {
  variants: {
    animated: {
      true: ["animate-draw animation-delay-700"],
    },
  },
})

const DrawnArrow: FC<DrawnArrowProps> = ({ className, animated, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 379.57 263.14"
      className={twMerge(drawnArrow({ className }))}
      {...props}
    >
      <g>
        <clipPath id="clipper">
          <path
            fill="currentColor"
            d="M9.54,92.34c3.14,4.51,3.68,1.07,4.96-1.46,6.05-11.9,11.03-24.68,18.82-35.35,6.75-9.44,15.33-17.42,25.24-23.46,9.9-6.04,20.91-10.02,32.39-11.7,68.69-11.31,140.69,32.09,184.6,81.82,12.88,14.22,23.96,29.98,32.98,46.92,9.81,19.49,16.6,43.11,14.2,65.08-.53,5.61-1.78,11.13-3.72,16.43-5.11-7.04-9.35-14.38-14.55-21.21-5.2-6.82-10.09-13.07-15.2-19.54-4.32-6.24-9.2-12.08-14.57-17.45-3.9-3.37-6.15-.69-4.76,3.83,2.05,4.74,4.78,9.16,8.1,13.12,9.84,14.75,18.72,30.12,26.58,46.01,2.01,4.02,3.53,8.26,5.47,12.29,1.35,2.79,2.84,6.99,6.02,8.08,5.57,2.07,9.18-6.62,11.14-10.21,8.53-15.34,18.64-29.75,30.18-42.99,3.83-4.44,11.08-10.09,9.56-16.72-1.52-6.63-11.77,4.39-13.41,6.33-4.89,5.61-9.2,11.86-13.71,17.86-2.05,2.69-10.73,14.03-12.99,17.22,.89-10.45,1.08-13.2,1.11-19.71,1.73-54.11-35.47-101.08-74.92-133.94-12.32-10.21-25.38-19.5-39.06-27.8-10.24-6.31-20.92-11.88-31.95-16.68-25.68-11.03-53.61-17.36-81.47-14.63-7.93,.85-15.77,2.45-23.39,4.78-16.22,5.17-30.72,14.66-41.95,27.45-5.43,5.92-10.26,12.37-14.43,19.24-1.92,3.43-13.81,22.74-11.25,26.38Z"
          />
        </clipPath>
        <path
          clipPath="url(#clipper)"
          fill="none"
          stroke="currentColor"
          strokeWidth="20px"
          strokeMiterlimit={10}
          strokeDasharray={1000}
          strokeDashoffset={1000}
          d="M9.18,95.02C29.86,47.21,103.7-38.98,213.97,45.8c142.87,109.84,96.01,189.85,105.8,207.12,1.03,1.82,10.16-6.04-44.89-78.93-19.1-25.29,32.17,155,95.4-3.09"
          className={twMerge(drawnArrow({ animated }))}
        />
      </g>
    </svg>
  )
}

export default DrawnArrow
