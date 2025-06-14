import { signOut } from '@/auth'
import { env } from '@/env'
import { signOut as signOutClient } from 'next-auth/react'
import { GetUrlOptions } from './type'

export const getUrl = ({
  baseUrl = env.NEXT_PUBLIC_API_ENDPOINT ?? '',
  path = '',
  params = {},
}: GetUrlOptions) => {
  if (!baseUrl) {
    throw new Error('Base URL is required')
  }

  const url = new URL(path, baseUrl)

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value))
  })

  return url.toString()
}

export const handleSignOut = async () => {
  if (typeof window === 'undefined') {
    await signOut()
  } else {
    signOutClient()
  }
}
