import { PlopTypes } from "@turbo/gen"

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("newUI", {
    description: "Creates a new UI Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new file to create?",
        validate: (input: string) => {
          if (input.includes(".")) {
            return "Component name cannot include an extension"
          }
          if (input.includes(" ")) {
            return "Component name cannot include spaces"
          }
          if (!input) {
            return "Component name is required"
          }
          return true
        },
      },
      {
        type: "list",
        name: "type",
        message: "What type of UI should be created?",
        choices: ["Component", "Molecule"],
      },
      {
        type: "confirm",
        name: "hasFragment",
        message: "Will this have a fragment associated with it?",
      },
    ],
    actions: (data) => {
      const path = "{{ turbo.paths.root }}/src/{{ lowerCase type }}s/{{ pascalCase name }}"
      const actions = [
        {
          type: "add",
          path: `${path}/index.tsx`,
          templateFile: "templates/tsx-gen.hbs",
        },
        {
          type: "add",
          path: `${path}/__tests__/{{ camelCase name }}.test.tsx`,
          templateFile: "templates/test-gen.hbs",
        },
      ]

      if (data?.hasFragment) {
        actions.push({
          type: "add",
          path: `${path}/{{ lowerCase name }}.gql`,
          templateFile: "templates/gql-gen.hbs",
        })
      }

      return actions
    },
  })
}
