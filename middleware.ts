import { createI18nMiddleware } from 'next-international/middleware'
import { auth } from './auth'
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from './lib/auth/routes'
import { locales } from './locales/config'

const I18nMiddleware = createI18nMiddleware({
  locales: locales,
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite',
})

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isApiAuthRoute) {
    return
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return I18nMiddleware(req)
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(`/login`, nextUrl))
  }

  return I18nMiddleware(req)
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
