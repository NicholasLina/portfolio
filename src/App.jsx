import { Routes, Route } from 'react-router-dom'

import './App.css'
import NoMatch from './NoMatch.jsx'
import Home from './Home.jsx'
import Layout from './Layout.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

export default App
