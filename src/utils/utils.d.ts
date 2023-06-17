import { StateCreator } from "zustand"

export type ZusSlice<State, Slice> = StateCreator<State, [], [], Slice>
export type RemoveTypename<T> = T extends object
  ? {
      [K in keyof T as Exclude<K, "__typename">]: RemoveTypename<T[K]>
    }
  : T

declare global {
  /**
   * Generic for Type or Null
   */
  type Maybe<T> = T | null
  /**
   * Removes required data from CMS
   */
  type Clean<T> = Omit<RemoveTypename<T>, "id">
}

export {}
