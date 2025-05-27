
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

export default function RMCharactersPage() {
  const { status, data } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character/')
      return await res.json()
    }
  })

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error :(</p>

  console.info(data)

  return (
    <div>
      <p className='text-xl font-bold'>Characters</p>
      <ul>
        {data.results.map((person) => {
          return (
            <li key={person.id}>
              <Link to={`/rickandmorty/characters/${person.id}`}>
                <div >
                  {person.name} - {person.gender}: {person.species}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}