import { create } from "zustand"
import createModeSlice, { ModeSlice } from "src/store/createModeSlice"

type StoreState = ModeSlice

const useStore = create<StoreState>()((...args) => ({
  ...createModeSlice(...args),
}))

export default useStore
