import type { BeforeDocumentControlsServerProps } from 'payload'
import { GenerateWebsite as GenerateWebsiteClient } from './GenerateWebsiteClient'

export function GenerateWebsite(props: BeforeDocumentControlsServerProps, ...rest: any[]) {
  console.log('PARAMS: ', props)
  console.log('SECOND: ', rest)
  return <GenerateWebsiteClient />
}
