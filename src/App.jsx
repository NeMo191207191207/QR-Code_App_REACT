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
        <Route path='/QR-Code_App_REACT/generate' element={<QRCodeGenerator />}/>
        <Route path='/QR-Code_App_REACT/scanner' element={<QRCodeScanner />}/>
        <Route path='/QR-Code_App_REACT/generateHistory' element={<GenerateHistory />}/>
        <Route path='/QR-Code_App_REACT/scannerHistory' element={<ScannerHistory />}/>
      </Routes>
    </>
  )
}

export default App