import { StateCreator } from "zustand"

export type ZusSlice<State, Slice> = StateCreator<State, [], [], Slice>

declare global {
  /**
   * Generic for Type or Null
   */
  type Maybe<T> = T | null
  /**
   * Removes required data from CMS
   */
  type Clean<T> = Omit<T, "__typename">
}

export {}
