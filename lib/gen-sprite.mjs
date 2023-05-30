import fs from "fs/promises"
import { parseArgs } from "node:util"
import path from "path"

import svgSpreact from "svg-spreact"

/**
 * A utility to create an SVG sprite from a directory of SVGs.
 *
 * @summary
 * Takes all SVG's (and only SVG's) from a directory.
 * Optimizes all SVG's and strips styles from them (uses SVGO).
 * Writes a new sprite to the output destination.
 *
 * @argument {string} --srcDir, -s - The absolute path to the source directory of SVG's.
 * @argument {string} --outputPath, -o - The absolute path to the source file to be written.
 *
 * If you dont want to use arguments, you can just add as defaults to the
 * `parseArgs` options below
 */

// this is the rootDir for THIS directory only. Requires refactoring to be used in a package/CLI
const root = new URL("..", import.meta.url).pathname
const {
  values: { srcDir, outputPath },
} = parseArgs({
  options: {
    srcDir: {
      type: "string",
      short: "s",
    },
    outputPath: {
      type: "string",
      short: "o",
      default: path.resolve(root, "sprite.svg"),
    },
  },
})

if (!srcDir) {
  console.log(
    "\x1b[31m%s\x1b[0m",
    "\nA source directory is required. \nYou can identify the source directory with the '--srcDir' or '-s' flags."
  )
  process.exit(1)
}
console.log("\x1b[36m%s\x1b[0m", `\nConverting SVG's from ${srcDir}`)

// SVGO optimization configuration https://github.com/svg/svgo
const config = {
  plugins: [
    { name: "removeStyleElement", active: true },
    { name: "removeScriptElement", active: true },
    { name: "removeViewBox", active: false },
    { name: "removeTitle", active: false },
    {
      name: "removeAttrs",
      params: {
        attrs: ["(class|style)", "xlink:href", "xmlns:xlink", "data-name", "(fill|stroke)"],
      },
    },
  ],
  multipass: true,
}

const readFolder = async (folder) => {
  let svgs = []
  const files = await fs.readdir(folder)
  const filtered = files.filter((file) => path.extname(file) === ".svg")
  const filenames = filtered.map((file) => file.replace(".svg", ""))
  for (let file of filtered) {
    const data = await fs.readFile(path.resolve(folder, file))
    svgs = [...svgs, data.toString()]
  }
  console.log(`${filenames.length} assets found...`)
  return Promise.resolve({ svgs, filenames })
}

const createSprite = ({ svgs, filenames }) => {
  const processId = (n) => filenames[n]
  return svgSpreact(svgs, {
    tidy: true,
    processId,
    className: "icon",
    optimize: true,
    svgoConfig: config,
  })
}

const pathExists = async (input) => {
  try {
    await fs.access(input)
    return true
  } catch {
    return false
  }
}

const createAndWrite = async (writePath, data) => {
  const directory = path.dirname(writePath)
  if (!(await pathExists(directory))) {
    await fs.mkdir(directory, { recursive: true })
    console.log(`Created ${directory}`)
  }

  await fs.writeFile(writePath, data, { flag: "w" })
  console.log(`'${path.basename(writePath)}' written to ${directory}`)
}

const rawSvgData = await readFolder(path.resolve(root, srcDir))
const { defs } = await createSprite(rawSvgData)
await createAndWrite(path.resolve(root, outputPath), defs)

console.log("\x1b[32m%s\x1b[0m", "Done\n")
