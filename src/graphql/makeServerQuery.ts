import { DocumentNode } from "graphql"
import { getClient } from "src/graphql/client"
import type { ApolloError } from "@apollo/client"

type ServerQueryResponse<T> = { loading: boolean; error?: ApolloError } & T

const makeServerQuery = async <T>(query: DocumentNode): Promise<ServerQueryResponse<T>> => {
  const { data, loading, error } = await getClient().query<T>({ query })

  return { ...data, loading, error }
}

export default makeServerQuery
