import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import MirroringPage from './components/pages/MirroringPage'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/MirrorScreen" element={<MirroringPage />} />
    </Routes>
  )
}

export default App
