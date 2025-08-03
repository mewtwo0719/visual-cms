import { Data } from '@measured/puck'
import config from '@payload-config'
import fs from 'fs'
import { getPayload } from 'payload'

const payload = await getPayload({ config })
// Replace with call to your database
export const getPage = async (path: string, id: number) => {
  console.log('I GOT THIS ID FOR PAGE: ', id)
  const result = await payload.findByID({
    collection: 'websites',
    id: id,
  })

  const allData: Record<string, Data> | null = fs.existsSync('database.json')
    ? JSON.parse(fs.readFileSync('database.json', 'utf-8'))
    : null

  console.log('PATH: ', path)
  console.log('PAYLOAD RESULT: ', result)
  console.log('PUCK RESULT: ', allData ? allData[path] : null)

  const data = JSON.parse(result.meta?.puck_config as string)

  return data

  return allData ? allData[path] : null
}
