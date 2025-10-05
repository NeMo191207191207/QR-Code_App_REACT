import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import QRCodeGenerator from "./components/Ganerate/QRCodeGenerator"
import QRCodeScanner from "./components/Scanner/QRCodeScanner"
import GenerateHistory from "./components/GenerateHistory/GenerateHistory"
import ScannerHistory from "./components/ScannerHistory/ScannerHistory"


const App = () => {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path='/generate' element={<QRCodeGenerator />}/>
        <Route path='/scanner' element={<QRCodeScanner />}/>
        <Route path='/generateHistory' element={<GenerateHistory />}/>
        <Route path='/scannerHistory' element={<ScannerHistory />}/>
      </Routes>
    </>
  )
}

export default App