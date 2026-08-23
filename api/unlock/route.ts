import { prisma } from '../../lib/db'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { userId, episodeId, coinPrice } = await req.json()

  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user || user.coinBalance < coinPrice) {
    return NextResponse.json({ error: "Not enough coins" }, { status: 400 })
  }

  await prisma.user.update({
    where: { id: userId },
    data: { coinBalance: { decrement: coinPrice }
  })

  await prisma.episodeUnlock.create({
    data: { userId, episodeId }
  })

  return NextResponse.json({ success: true, message: "Episode Unlocked!" })
}