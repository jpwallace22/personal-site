"use client"

import Switch from "@molecules/Switch"

export const ModeChanger = () => {
  const handleChecked = (checked: boolean) => {
    if (checked) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  return <Switch id="switcher" onCheckedChange={handleChecked} />
}
