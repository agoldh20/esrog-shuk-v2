import { FC } from 'react';

const StartOrderButton: FC = () => {
  const handleClick = () => {
    // TODO
    console.log('=============>', 'start order click');
  }

  return (
    <span className="buttons">
      <button type="button" className="btn btn-success" onClick={ handleClick }>Start New Order</button>
    </span>
  )
}

export default StartOrderButton
