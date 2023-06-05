import fs from "fs"
import path from "path"

const root = new URL("..", import.meta.url).pathname
const filePath = path.resolve(root, "src/graphql/__gen__/types.d.ts")
const exportStatement = "\nexport {}\n"

fs.appendFile(filePath, exportStatement, (err) => {
  if (err) {
    console.error("An error occurred while adding  the export statement:", err)
    return
  }
})
