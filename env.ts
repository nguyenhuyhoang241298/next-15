import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    AUTH_SECRET: z.string().min(1),
    AUTH_URL: z.string().url(),
    AUTH_TRUST_HOST: z.string(),
  },

  client: {
    NEXT_PUBLIC_API_ENDPOINT: z.string(),
    NEXT_PUBLIC_AUTH_URL: z.string().url(),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
    NEXT_PUBLIC_AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL,
  },
})
