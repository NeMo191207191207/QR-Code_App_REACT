import { SCAN_DATA } from '../../constants'
import { QRCodeSVG } from 'qrcode.react'

const ScannerHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')
  
  return (
    <div className='qr-code_history'>
      {data.map((text) => (
        <div className='qr-code_history-list'  key={text}>
          <p className='qr-code_history-list-item_text'>{text}</p>
          <QRCodeSVG className='qr-code_history-list-item' value={text} size={250} />
        </div>
      ))}
    </div>
  )
}

export default ScannerHistory