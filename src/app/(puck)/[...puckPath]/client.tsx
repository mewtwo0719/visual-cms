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

  const html = ReactDOMServer.renderToStaticMarkup(<Render config={config} data={data} />)
  console.log(html)
  return (
    <>
      <Render config={config} data={data} />
    </>
  )
}
