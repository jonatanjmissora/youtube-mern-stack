import { Route, Routes } from 'react-router'
import './index.css'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import DetailNotePage from './pages/DetailNotePage'

function App() {

  return (
    <>
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
      </Routes>
    </>
  )
}

export default App
