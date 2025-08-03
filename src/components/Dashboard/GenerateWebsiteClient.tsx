'use client'
import { Button, useDocumentInfo } from '@payloadcms/ui'

export function GenerateWebsite() {
  const documentInfo = useDocumentInfo()
  return (
    <Button type="button" onClick={() => alert('yoo')}>
      Generate Website {documentInfo.id}
    </Button>
  )
}
