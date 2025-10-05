import { GENERATE_DATA } from '../../constants'
import { QRCodeSVG } from 'qrcode.react'

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')
  
  return (
    <div className='qr-code_history'>
      {data.map((text) => (
        <div className='qr-code_history-list' key={text}>
          <QRCodeSVG className='qr-code_history-list-item' value={text} size={250} />
          <p className='qr-code_history-list-item_text'>{text}</p>
        </div>
      ))}
    </div>
  )
}

export default GenerateHistory
