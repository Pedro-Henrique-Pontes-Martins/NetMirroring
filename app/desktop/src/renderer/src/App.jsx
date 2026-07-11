import { Route, Routes } from 'react-router-dom'

import Home from './components/pages/Home'
import MirroringPage from './components/pages/MirroringPage'
import ConnectionPage from './components/pages/ConnectionPage'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MirrorScreen" element={<MirroringPage />} />
      <Route path="/ConnectDevice" element={<ConnectionPage />} />
    </Routes>
  )
}

export default App
