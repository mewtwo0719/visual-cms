import fs from 'fs'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

import config from '@payload-config'
import { getPayload } from 'payload'

const payload = await getPayload({ config })

export async function POST(request: Request) {
  const routeData = await request.json()

  const existingData = JSON.parse(
    fs.existsSync('database.json') ? fs.readFileSync('database.json', 'utf-8') : '{}',
  )

  // const body = await request.body // <- Body is parsed automatically (JSON, if content-type is application/json)
  console.log('POST body:', routeData)

  // console.log('PAYLOAD FROM PUCK: ', payload.update({
  //   collection: 'websites',
  //   where: {
  //     id:
  //   }
  // }))

  payload.update({
    collection: 'websites',
    where: {
      id: routeData.id,
    },
    data: {
      meta: {
        puck_config: routeData.data,
      },
    },
  })

  const updatedData = {
    ...existingData,
    [routeData.path]: routeData.data,
  }

  //TODO: Implement a proper database saving, needs triage
  fs.writeFileSync('database.json', JSON.stringify(updatedData))

  // Purge Next.js cache
  revalidatePath(routeData.path)

  return NextResponse.json({ status: 'ok' })
}
