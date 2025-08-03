import { CollectionSlug, PayloadRequest } from 'payload'

const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/posts',
  pages: '',
}

type Props = {
  collection: keyof typeof collectionPrefixMap
  slug: string
  req: PayloadRequest
  edit: boolean
}

export const generatePreviewPath = ({ collection, slug, edit, req }: Props) => {
  const encodedParams = new URLSearchParams({
    //slug,
    // collection,
    // path: `${collectionPrefixMap[collection]}/${slug}`,
    // previewSecret: process.env.PREVIEW_SECRET || '',
    id: req.routeParams?.id as string,
  })

  console.log('REQ: ', req.routeParams?.id)

  const url = `/${edit ? 'puck/' : ''}${slug}?${encodedParams.toString()}`

  return url
}
