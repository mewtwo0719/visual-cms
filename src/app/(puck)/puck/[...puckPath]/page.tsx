/**
 * This file implements a *magic* catch-all route that renders the Puck editor.
 *
 * This route exposes /puck/[...puckPath], but is disabled by middleware.ts. The middleware
 * then rewrites all URL requests ending in `/edit` to this route, allowing you to visit any
 * page in your application and add /edit to the end to spin up a Puck editor.
 *
 * This approach enables public pages to be statically rendered whilst the /puck route can
 * remain dynamic.
 *
 * NB this route is public, and you will need to add authentication
 */
import '@measured/puck/puck.css'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { getPage } from '../../../../../lib/get-page'
import { Client } from './client'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ puckPath: string[] }>
}): Promise<Metadata> {
  const { puckPath = [] } = await params
  const path = `/${puckPath.join('/')}`

  return {
    title: 'Puck: ' + path,
  }
}

export default async function Page({ params }: { params: Promise<{ puckPath: string[] }> }) {
  console.log('THE PUCK EDITOR IS RENDERED')
  const { puckPath = [] } = await params
  const heads = await headers()
  //console.log('HEDDAAREEEL ', heads)
  const referer = heads.get('referer')

  let id: string | null = null

  if (referer) {
    try {
      const url = new URL(referer)

      // Try to get `id` from search params first
      let idParam = url.searchParams.get('id')

      if (!idParam) {
        // If no search param `id`, try to get last pathname segment as id
        const segments = url.pathname.split('/').filter(Boolean)
        const lastSegment = segments[segments.length - 1]
        if (lastSegment) {
          idParam = lastSegment
        }
      }

      if (idParam) {
        const parsedId = Number(idParam)
        id = isNaN(parsedId) ? null : parsedId
      }
    } catch (err) {
      console.warn('Failed to parse referer URL:', err)
    }
  }
  const path = `/${puckPath.join('/')}`
  const data = await getPage(path, id as unknown as number)

  return (
    <>
      <Client path={path} data={data || {}} />
    </>
  )
}

//export const dynamic = 'force-dynamic'
