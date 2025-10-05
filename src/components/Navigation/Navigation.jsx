import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/QR-Code_App_REACT/generate">Генерировать QR-Code</Link>
      <Link className="nav-link" to="/QR-Code_App_REACT/scanner">Сканировать QR-Code</Link>
      <Link className="nav-link" to="/QR-Code_App_REACT/generateHistory">История генерирования</Link>
      <Link className="nav-link" to="/QR-Code_App_REACT/scannerHistory">История сканирования</Link>
    </nav>
  )
}

export default Navigation