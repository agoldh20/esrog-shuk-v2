import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

const SalesPage: FC = () => {
  const dispatch = useDispatch();
  const [admin, SetAdmin] = useState(false)

  return (
    <>
      {admin ? (
        <></>
      ) : (
        <h1>
          <strong>YOU MUST BE AN ADMIN TO VIEW THIS PAGE</strong>
        </h1>
      )}
    </>
  )
}
