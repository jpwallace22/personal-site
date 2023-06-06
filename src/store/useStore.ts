import { create } from "zustand"
import createClipboardSlice, { ClipboardSlice } from "src/store/createClipboardSlice"
import createModeSlice, { ModeSlice } from "src/store/createModeSlice"

type StoreState = ModeSlice & ClipboardSlice

const useStore = create<StoreState>()((...args) => ({
  ...createModeSlice(...args),
  ...createClipboardSlice(...args),
}))

export default useStore
