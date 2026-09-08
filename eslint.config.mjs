import fs from "node:fs"
import next from "eslint-config-next"
import nextTypescript from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier/flat"
import jest from "eslint-plugin-jest"
import testingLibrary from "eslint-plugin-testing-library"

/** Files eslint-config-next configures; project blocks match it so plugins resolve. */
const SOURCE_FILES = ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"]
const TEST_FILES = ["**/__tests__/**/*.{ts,tsx}", "**/__test__/**/*.{ts,tsx}", "**/*.test.{ts,tsx}"]

export default [
  {
    ignores: [
      ".next",
      "node_modules",
      "**/*.cjs",
      // content documents, not source
      "src/content/blog",
      "src/content/info",
    ],
  },
  ...next,
  ...nextTypescript,
  {
    name: "project/rules",
    files: SOURCE_FILES,
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@next/next/no-html-link-for-pages": "off",
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "type"],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            ...renderInternalOrder(),
          ],
          pathGroupsExcludedImportTypes: ["react", "builtin", "type"],
          "newlines-between": "never",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    name: "project/typescript",
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      // successor to no-empty-interface, which this project has always allowed
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ...testingLibrary.configs["flat/react"],
    name: "project/testing-library",
    files: TEST_FILES,
  },
  {
    ...jest.configs["flat/recommended"],
    name: "project/jest",
    files: TEST_FILES,
  },
  {
    name: "project/test-rules",
    files: TEST_FILES,
    rules: {
      "testing-library/prefer-screen-queries": "off",
    },
  },
  prettier,
]

function renderInternalOrder() {
  const specifiedPaths = ["@atoms", "@molecules", "@components", "@utils"]
  return [...specifiedPaths, ...getAllInternalDirectories()].map((singleDir) => ({
    pattern: `${singleDir}/**`,
    group: "internal",
    position: "after",
  }))
}

function getAllInternalDirectories() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"]
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f))
}

function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path + "/" + file).isDirectory()
  })
}
