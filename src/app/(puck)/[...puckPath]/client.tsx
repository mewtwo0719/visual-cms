'use client'

import type { Data } from '@measured/puck'
import { Render } from '@measured/puck'
import { useEffect } from 'react'
import ReactDOMServer from 'react-dom/server'
import config from '../../../puck.config'

export function Client({ data }: { data: Data }) {
  useEffect(() => {
    console.log('THE DATA PASSED DOWN TO CLIENT: ', data)
  }, [data])

  console.log('DATA BEFORE SEDNING: ', data)
  const html = ReactDOMServer.renderToStaticMarkup(
    <>
      {/* <div>
        <Button>Test</Button>
      </div>
      , */}
      <>
        <Render
          config={config}
          data={data || { content: [{ type: 'text', props: { text: 'Fallback' } }] }}
        />
      </>
    </>,
  )
  console.log('HTML: ', html, config, data)
  return (
    <>
      <Render config={config} data={data} />
    </>
  )
}
//export const dynamic = 'force-static'
