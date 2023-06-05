declare global {
  export type GlobalNavFragment = {
    __typename: "GlobalNavRecord"
    id: string
    links: Array<{ __typename: "ButtonRecord" } & ButtonFragment>
  }

  export type GlobalNavComponentQueryVariables = Exact<{ [key: string]: never }>

  export type GlobalNavComponentQuery = {
    __typename: "Query"
    _site: { __typename: "Site"; favicon?: ({ __typename: "FileField" } & ImageFragment) | null }
    globalNav?: ({ __typename: "GlobalNavRecord" } & GlobalNavFragment) | null
  }

  export type ImageFragment = {
    __typename: "FileField"
    id: string
    alt?: string | null
    blurhash?: string | null
    height?: number | null
    width?: number | null
    url: string
  }

  export type ButtonFragment = {
    __typename: "ButtonRecord"
    id: string
    variant?: string | null
    label?: string | null
    url?: string | null
    disabled?: boolean | null
    startIcon?: string | null
    endIcon?: string | null
  }
}
export {}
