import octoai from "src/content/projects/octoai"
import octoml from "src/content/projects/octoml"
import reactLazify from "src/content/projects/react-lazify"
import solana from "src/content/projects/solana"
import spotifyWidget from "src/content/projects/spotify-widget"
import thisSite from "src/content/projects/this-site"
import webstacksUiLibrary from "src/content/projects/webstacks-ui-library"

/**
 * The order shown on the home page, which also drives the "Next Project" card
 * at the foot of a project page. octoml is deliberately not featured.
 */
export const featuredProjects = [
  octoai,
  webstacksUiLibrary,
  spotifyWidget,
  solana,
  thisSite,
  reactLazify,
]

/** Everything with a page, featured or not. */
export const allProjects = [...featuredProjects, octoml]
