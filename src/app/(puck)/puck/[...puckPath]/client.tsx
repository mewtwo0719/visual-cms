'use client'

import { Button } from '@/components/ui/button'
import type { Data } from '@measured/puck'
import { Puck, Render } from '@measured/puck'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import config from '../../../../puck.config'

export function Client({ path, data }: { path: string; data: Partial<Data> }) {
  const [loading, setLoading] = useState(false)
  const sparams = useSearchParams()

  const downloadWebsite = async () => {
    setLoading(true)

    const ReactDOMServer = await import('react-dom/server')
    const html = ReactDOMServer.renderToStaticMarkup(<Render config={config} data={data} />)

    const res = await fetch('/api/bootstrap', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ html }),
    })

    setLoading(false)
    alert(res.ok ? '✅ Site created' : '❌ Failed to generate site')
  }

  return (
    <>
      <div className="items-end w-full justify-end">
        <Button onClick={downloadWebsite} disabled={loading}>
          {loading ? 'Creating...' : 'Download'}
        </Button>
      </div>

      <Puck
        config={config}
        data={data}
        onPublish={async (data) => {
          await fetch('/puck/api', {
            method: 'POST',
            body: JSON.stringify({ data, path, id: sparams?.get('id') }),
          })
        }}
      />
    </>
  )
}
