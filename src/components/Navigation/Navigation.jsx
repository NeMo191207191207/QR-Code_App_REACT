import { Link } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
  return (
    <nav className="nav">
      <Link className="nav-link" to="/generate">Генерировать QR-Code</Link>
      <Link className="nav-link" to="/scanner">Сканировать QR-Code</Link>
      <Link className="nav-link" to="/generateHistory">История генерирования</Link>
      <Link className="nav-link" to="/scannerHistory">История сканирования</Link>
    </nav>
  )
}

export default Navigation