import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';

import { GENERATE_DATA } from '../../constants'


const QRCodeGenerator = () => {
  const [value, setValue] = useState()
  const [result, setResult] = useState('')

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]')

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, value])
    )

    setResult(value)
    setValue('')
  }

  const onChangeHandler = (event) => {
    setValue(event.target.value)
    setResult('')
  }


  return (
    <div className='qr_create container'>
      <div className='qr_create_form'>
        <input className='result' type="text" value={value} placeholder='Пиши сюда' onChange={onChangeHandler} />

        <button className='btn_handler' type='button' onClick={onClickHandler}>
          Сгенерировать
        </button>
      </div>

      {result !== '' && (<QRCodeSVG className='qr-code' value={result} size={250} />)}  {/* Отрисовка по условию */}
    </div>
  )
}

export default QRCodeGenerator