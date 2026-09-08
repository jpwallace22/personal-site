import type { Image, Tech } from "src/content/schema"

export const fakeImage: Image = {
  url: "/fake-image.jpg",
  alt: "Fake Image",
  width: 500,
  height: 500,
}

export const fakeTechs: Tech[] = [
  { title: "Tech 1", thumbnail: fakeImage },
  { title: "Tech 2", thumbnail: fakeImage },
  { title: "Tech 3", thumbnail: fakeImage },
]
