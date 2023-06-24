export const nextProjectFromPage = (
  page: ProjectPageQuery["templatePage"],
  currentProject: string
) => {
  const projectListing = page?.components.filter(
    (component) => component.__typename === "ProjectListingRecord"
  )[0] as ProjectListingFragment
  const cards = projectListing?.cards
  const currentIndex = cards.map((card) => card.slug).indexOf(currentProject)
  const nextProject = cards[currentIndex + 1]
  const lastProject = currentIndex + 1 >= cards.length

  return lastProject ? null : [nextProject]
}
