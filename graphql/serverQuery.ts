import { DocumentNode } from "graphql"
import { getClient } from "graphql/client"

const serverQuery = async (query: DocumentNode) => {
  const { data } = await getClient().query({ query })
  return data
}

export default serverQuery
