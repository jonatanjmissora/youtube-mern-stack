
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router'

function Character() {
  const { characterId } = useParams()
  const { status, data } = useQuery({
    queryKey: ['character', characterId],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      return await res.json()
    }
  })

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error :(</p>

  const locationUrlPars = data.location.url.split('/').filter(Boolean)
  const locationId = locationUrlPars[locationUrlPars.length - 1]

  return (
    <div>
      <p className='text-xl font-bold'>{data.name}</p>

      <div className='flex gap-6'>
        <span>Feature</span>
        <span>Value</span>
      </div>

      <div className='flex gap-6'>
        <span>Gender</span>
        <span>{data.gender}</span>
      </div>

      <div className='flex gap-6'>
        <span>Status</span>
        <span>{data.status}</span>
      </div>

      <div className='flex gap-6'>
        <span>Sspanecies</span>
        <span>{data.sspanecies}</span>
      </div>

      <div className='flex gap-6'>
        <span>Origin</span>
        <span>{data.origin.name}</span>
      </div>

      <p className='text-xl font-bold'>Location</p>
      <div>
        <Location id={locationId} />
      </div>

      <br />
      <div>Episodes</div>
      {data.episode.map((episode) => {
        const episodeUrlParts = episode.split('/').filter(Boolean)
        const episodeId = episodeUrlParts[episodeUrlParts.length - 1]

        return <Episode id={episodeId} key={`episode-${episodeId}`} />
      })}
    </div>
  )
}

function Episode({ id }) {
  const { data, status } = useQuery({
    queryKey: ['episode', id],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
      return await res.json()
    }
  })

  if (status !== 'success') {
    return null
  }

  return (
    <article key={id}>
      <Link to={`/rickandmorty/episodes/${id}`}>
        <div>
          {data.episode}. {data.name} - {data.air_date}
        </div>
      </Link>
    </article>
  )
}

function Location({ id }) {
  const { data, status } = useQuery({
    queryKey: ['location', id],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`)
      return await res.json()
    }
  })

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error :(</p>

  return (
    <>
      {data.name} - {data.type}
    </>
  )
}

export default Character
