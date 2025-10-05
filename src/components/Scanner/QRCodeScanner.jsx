import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

import { SCAN_DATA } from '../../constants'


const QRCodeScanner = () => {
  const [qrValue, setQRValue] = useState(null)

  const scanHandler = (result) => {
    setQRValue(result[0].rawValue)

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]')

    localStorage.setItem(
      SCAN_DATA,
      JSON.stringify([...prevData, result[0].rawValue])
    )
  }


  return (
    <div className='qr-code_scanner_conyainer container'>
      <Scanner classNames='qr-code_scanner' onScan={scanHandler}
        components={{
          audio: false,
          finder: false
        }}
        styles={{ container: { width: 450, height: 450 } }} />
      <h2 className='qr-code_scanner_title'>Отсканируйте QR-Code и получите информацию:</h2>
      <p className='qr-code_info'>{qrValue}</p>
    </div>
  )
}

export default QRCodeScanner