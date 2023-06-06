export interface ClipboardSlice {
  clipBoard: string
  setClipBoard: (arg: string) => void
}

const createClipboardSlice: ZusSlice<ClipboardSlice, ClipboardSlice> = (set) => ({
  clipBoard: "",
  setClipBoard: (arg) => set(() => ({ clipBoard: arg })),
})

export default createClipboardSlice
