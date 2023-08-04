import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

const VoucherTile: FC = () => {
  const dispatch = useDispatch();
  const [ hideVoucher, setHideVoucher ] = useState<boolean>(false);
  const [ provider, setProvider ] = useState();
  const [ amount, setAmount ] = useState();

  const handleVoucher = (event) => {
    setHideVoucher(event.target.checked)
    if (event.target.checked) {
      setProvider(undefined)
      setAmount(undefined)
    }
  }

  const handleProivder = (event) => {
    setProvider(event.target.value)
  }

  const handleAmount = (event) => {
    setAmount(event.target.value.replace(/[^0-9]/, ''))
  }

  return (
    <div className="voucher-tile pull-left">
      <input type="checkbox" checked={ hideVoucher } onChange={ handleVoucher }/> Voucher &nbsp;
      { hideVoucher ? (
        <>
          <select onChange={ handleProivder }>
            <option disabled selected>Provider</option>
            <option key="YTT" value="YTT">YTT</option>
            <option key="Veitzner" value="Veitzner">Veitzner</option>
            <option key="Khal Chasidim Staff" value="Khal Chasidim Staff">Khal Chasidim</option>
            <option key="Esrog Fund" value="Esrog Fund">Esrog Fund</option>
          </select>
          <input
            type="text"
            onChange={ handleAmount }
            placeholder="$$"
            style={ { width: '64px', height: '23px', marginLeft: '8px' } }
            maxLength={ 3 }
            value={ amount }/>
        </>
      ) : <></> }
    </div>
  )
}

export default VoucherTile;
