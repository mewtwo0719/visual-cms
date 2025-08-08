// app/api/bootstrap/route.ts
import { bootstrap } from '@/bootstrap'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { html, folder } = await req.json()

  try {
    await bootstrap(folder || 'my-site', html)
    return NextResponse.json({ success: true })
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) }, { status: 500 })
  }
}
