import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router'

function Episode() {
  const { episodeId } = useParams()
  const { data, status } = useQuery({
    queryKey: ['episode', episodeId],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${episodeId}`)
      return await res.json()
    }
  })

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error :(</p>

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.air_date}</div>
      <br />
      <div >Characters</div>
      {data.characters.map((character) => {
        const characterUrlParts = character.split('/').filter(Boolean)
        const characterId = characterUrlParts[characterUrlParts.length - 1]
        return <Character id={characterId} key={characterId} />
      })}
    </div>
  )
}

function Character({ id }) {
  const { data, status } = useQuery({
    queryKey: ['character', id],
    queryFn: async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      return await res.json()
    }
  })

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error :(</p>

  return (
    <article key={id}>
      <Link to={`/rickandmorty/characters/${id}`}>
        <div>{data.name}</div>
      </Link>
    </article>
  )
}

export default Episode