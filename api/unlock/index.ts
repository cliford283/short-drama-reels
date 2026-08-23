import { prisma } from '../../lib/db'

export async function unlockEpisode(userId: string, episodeId: string, cost: number) {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  
  if (!user || user.coinBalance < cost) {
    return { success: false, message: "Not enough coins" }
  }

  await prisma.user.update({
    where: { id: userId },
    data: { coinBalance: user.coinBalance - cost }
  })

  await prisma.episodeUnlock.create({
    data: { userId, episodeId }
  })

  return { success: true, newBalance: user.coinBalance - cost }
}