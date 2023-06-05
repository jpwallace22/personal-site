export interface ModeSlice {
  isDark: boolean
  setIsDark: (arg: boolean) => void
}

const createModeSlice: ZusSlice<ModeSlice, ModeSlice> = (set) => ({
  isDark: true,
  setIsDark: (arg) => set(() => ({ isDark: arg })),
})

export default createModeSlice
