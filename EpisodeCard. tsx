'use client'

export default function EpisodeCard({ep, isUnlocked, userId}: {ep: any, isUnlocked: boolean, userId: string}) {
  
  const unlock = async () => {
    const res = await fetch('/api/unlock', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        episodeId: ep.id,
        coinPrice: ep.coinPrice
      })
    })
    const data = await res.json()
    if(res.ok) alert(data.message)
    else alert(data.error)
    window.location.reload()
  }

  return (
    <div className="bg-gray-900 p-4 rounded mb-3">
      <h3 className="font-bold">{ep.title}</h3>
      {ep.isFree ? (
        <button className="bg-green-600 px-3 py-1 rounded mt-2">Watch Free</button>
      ) : isUnlocked ? (
        <button className="bg-green-600 px-3 py-1 rounded mt-2">Watch Now</button>
      ) : (
        <button onClick={unlock} className="bg-red-600 px-3 py-1 rounded mt-2">
          Unlock for 🪙 {ep.coinPrice}
        </button>
      )}
    </div>
  )
}