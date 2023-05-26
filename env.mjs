import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    DATO_CMS: z.string(),
    GOOGLE_TAG_ID: z.string(),
  },
  client: {},
  runtimeEnv: {
    DATO_CMS: process.env.DATO_CMS,
    ANALYZE: process.env.ANALYZE,
    GOOGLE_TAG_ID: process.env.GOOGLE_TAG_ID,
  },
})
