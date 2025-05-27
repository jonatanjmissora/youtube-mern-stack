import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

export default function RMEpisodesPage() {

  const { data, status } = useQuery({
    queryKey: ['episodes'],
    queryFn: async () => {
      const res = await fetch('https://rickandmortyapi.com/api/episode')
      return await res.json()
    }
  })

  if (status === 'pending') {
    return <p>Loading...</p>
  }
  if (status === 'error') {
    return <p>Error :</p>
  }

  return (
    <div>
      <p className="text-xl font-bold">Episodes</p>
      <ul>
        {data.results.map((episode) => (
          <li key={episode.id}>
            <Link to={`/rickandmorty/episodes/${episode.id}`}>
              <div >
                {episode.episode} - {episode.name} <em>{episode.airDate}</em>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
