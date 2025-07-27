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

export const generatePreviewPath = ({ collection, slug, edit }: Props) => {
  const encodedParams = new URLSearchParams({
    //slug,
    collection,
    path: `${collectionPrefixMap[collection]}/${slug}`,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/${edit ? 'puck/' : ''}${slug}?${encodedParams.toString()}`

  return url
}
