import { Route, Routes } from 'react-router'
import './_styles/index.css'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import DetailNotePage from './pages/DetailNotePage'
import Header from './components/Header'
import Footer from './components/Footer'
import RickAndMortyPage from './pages/RickAndMorty/RickAndMortyPage'
import RMEpisodesPage from './pages/RickAndMorty/RMEpisodesPage'
import RMCharactersPage from './pages/RickAndMorty/RMCharactersPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Episode from './pages/RickAndMorty/Episode'
import Character from './pages/RickAndMorty/Character'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="page-layout">

        <Header />

        <div className='flex-1'>

          <Routes>
            <Route
              path='/'
              element={<HomePage />}
            />
            <Route
              path='/createNote'
              element={<CreateNotePage />}
            />
            <Route
              path='/note/:id'
              element={<DetailNotePage />}
            />
            <Route
              path='/rickandmorty'
              element={<RickAndMortyPage />}
            />
            <Route
              path='/rickandmorty/episodes'
              element={<RMEpisodesPage />}
            />
            <Route
              path="/rickandmorty/episodes/:episodeId"
              element={<Episode />}
            />
            <Route
              path='/rickandmorty/characters'
              element={<RMCharactersPage />}
            />
            <Route
              path="/rickandmorty/characters/:characterId"
              element={<Character />}
            />
          </Routes>

        </div>

        <Footer />

      </div>
    </QueryClientProvider>
  )
}

export default App
