// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

module.exports = {
  ignorePatterns: ["**/*.cjs"],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["next", "prettier", "react-app", "react-app/jest"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "testing-library/prefer-screen-queries": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "@typescript-eslint/no-empty-interface": "off",
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
}

function renderInternalOrder() {
  const specifiedPaths = ["@codegen", "@atoms", "@molecules", "@components", "@utils"]
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
