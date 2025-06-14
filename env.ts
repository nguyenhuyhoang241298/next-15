import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().min(1),
  },

  client: {
    NEXT_PUBLIC_API_ENDPOINT: z.string(),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
  },
})
