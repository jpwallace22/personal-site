import { DocumentNode } from "graphql"
import { getClient } from "src/graphql/client"

const serverQuery = async <T>(query: DocumentNode) => {
  const { data } = await getClient().query<T>({ query })
  return data
}

export default serverQuery
