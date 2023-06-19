export const convertToKebabCase = (str?: Maybe<string>): Maybe<string> => {
  const normalizedStr = str
    ?.replace(/([a-z\d])([A-Z])/g, "$1-$2") // Insert dash before capital letters in Pascal and camel case
    ?.replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1-$2") // Insert dash between consecutive capital letters
    ?.replace(/_/g, "-") // Replace underscores with dashes
    ?.replace(/\s+/g, "-") // Replace spaces with dashes
    ?.toLowerCase() // Convert to lowercase

  return normalizedStr ?? null
}
