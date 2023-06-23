# The personal website of Justin Wallace

This is still a work in progress. It IS live and good enough for me to use, but I'm still tuning it, adding features, and managing technical debt.

## Tech Stack

- **React** - Used because of its popularity within the community and my familiarity.
- **Typescript** - Used for static typing and code completion/documentation.
- **NextJS 13+** - Used because I wanted to build something with the new app directory.
- **Tailwind** - Used because of its developer experience, flexibility, and the fact that it's zero runtime.
- **DatoCMS** - I love the UI for DatoCMS and feel like they have a generous free tier.
- **Apollo** - Used because of its popularity within the community and my familiarity.
- **Jest** - A great testing framework that I have used in the past. It has great support and documentation.

## Features

- Light/dark toggle
- Statically generated
- Semantic release (automatic versioning and changelog generation)
- CI/CD (Github Actions)
- Linting (eslint, commit linting, prettier)
- Testing (unit and e2e)
- Accessibility (axe)
- Typescript Codegen (graphql-codegen)
- Headless content, components, and pages

## Icons

An icon sprite is currently generated from the `src/assets/icons` directory. This reduces the load time for SVG's.

To add to the icon sprite you add an SVG to the `src/assets/icons` directory and run `yarn gen:icons` to create a new sprite. This will:

- strip out extra attributes and optimize the SVG
- create a new sprite in `public`
- create a new types file at `src/molecules/icon/iconIds.ts` with the new icon names
