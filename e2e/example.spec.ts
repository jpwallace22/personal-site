import { expect, test } from "@playwright/test"

test("has title", async ({ page }) => {
  await page.goto("./")
  await expect(page).toHaveTitle("Justin Wallace | Software Engineer")
})

test("builds paths", async ({ page }) => {
  await page.goto("./about")
  expect(page).toBeDefined()
})
