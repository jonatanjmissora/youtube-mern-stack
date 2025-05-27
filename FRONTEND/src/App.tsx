import { Route, Routes } from 'react-router'
import './_styles/index.css'
import HomePage from './pages/HomePage'
import CreateNotePage from './pages/CreateNotePage'
import DetailNotePage from './pages/DetailNotePage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (

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
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App
