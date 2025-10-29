import { Routes, Route } from 'react-router-dom'
import PlanetDetails from './pages/PlanetDetails'
import Header from './components/Header'
import Planets from './pages/Planets'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Planets />} />
          <Route path="/planet/:id" element={<PlanetDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App;