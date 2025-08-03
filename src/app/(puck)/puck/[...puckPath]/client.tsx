'use client'

import type { Data } from '@measured/puck'
import { Puck } from '@measured/puck'
import { useParams, useSearchParams } from 'next/navigation'
import config from '../../../../puck.config'

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const params = useParams()
  const sparams = useSearchParams()
  return (
    <Puck
      config={config}
      data={data}
      onPublish={async (data) => {
        await fetch('/puck/api', {
          method: 'post',
          body: JSON.stringify({ data, path, id: sparams?.get('id') }),
        })
      }}
    />
  )
}
