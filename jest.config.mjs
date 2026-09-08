import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  dir: "./",
})

/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jest-environment-jsdom",
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  testPathIgnorePatterns: ["<rootDir>/e2e"],
  modulePaths: ["<rootDir>"],
  moduleDirectories: ["node_modules", "src"],
}

// next/jest replaces moduleNameMapper wholesale, so the MDX stub is merged in
// after it has built the config.
export default async () => {
  const resolved = await createJestConfig(config)()

  return {
    ...resolved,
    moduleNameMapper: {
      "^next-mdx-remote/rsc$": "<rootDir>/src/components/Markdown/__mocks__/nextMdxRemote.tsx",
      ...resolved.moduleNameMapper,
    },
  }
}
