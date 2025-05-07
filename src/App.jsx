import { Routes, Route } from 'react-router-dom'
import NavMenu from './components/NavMenu/NavMenu.jsx'
import HomePage from './pages/Home/HomePage.jsx'

function App() {
  return (
    <>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App