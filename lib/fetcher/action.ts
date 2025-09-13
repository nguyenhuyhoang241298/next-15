import { auth } from '@/auth'
import { getSession } from 'next-auth/react'

export const getAuthorizationHeader = async ({
  hasAccessToken = true,
}: {
  hasAccessToken?: boolean
}): Promise<HeadersInit> => {
  if (!hasAccessToken) return {}

  const session =
    typeof window === 'undefined' ? await auth() : await getSession()

  if (!session) {
    return {}
  }

  const accessToken = session.accessToken
  if (!accessToken) {
    return {}
  }

  return { Authorization: `Bearer ${accessToken}` }
}
