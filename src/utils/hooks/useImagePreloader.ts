import { useEffect, useState } from "react"

const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = function () {
      resolve(img)
    }
    img.onerror = img.onabort = function () {
      reject(src)
    }
    img.src = src
  })
}

export const useImagePreloader = (imageList: Array<string | undefined>) => {
  const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false)

  useEffect(() => {
    let isCancelled = false

    ;(async () => {
      if (isCancelled) {
        return
      }

      const imagesPromiseList: Promise<unknown>[] = []
      for (const src of imageList) {
        if (src) {
          imagesPromiseList.push(preloadImage(src))
        }
      }

      await Promise.all(imagesPromiseList)

      if (isCancelled) {
        return
      }

      setImagesPreloaded(true)
    })()

    return () => {
      isCancelled = true
    }
  }, [imageList])

  return { imagesPreloaded }
}
