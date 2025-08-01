import fs from 'fs'
import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json()

  const existingData = JSON.parse(
    fs.existsSync('database.json') ? fs.readFileSync('database.json', 'utf-8') : '{}',
  )

  const updatedData = {
    ...existingData,
    [payload.path]: payload.data,
  }

  //TODO: Implement a proper database saving, needs triage
  fs.writeFileSync('database.json', JSON.stringify(updatedData))

  // Purge Next.js cache
  revalidatePath(payload.path)

  return NextResponse.json({ status: 'ok' })
}
