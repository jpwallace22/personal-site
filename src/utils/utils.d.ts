import { StateCreator } from "zustand"

declare global {
  type Maybe<T> = T | null
  type ZusSlice<State, Slice> = StateCreator<State, [], [], Slice>
}

export {}
