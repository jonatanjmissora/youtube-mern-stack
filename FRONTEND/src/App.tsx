import { Route, Routes } from 'react-router'
import './_styles/index.css'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import DetailNotePage from './pages/DetailNotePage'

function App() {
  return (
    <div className="page-layout">
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
    </div>
  )
}

export default App
