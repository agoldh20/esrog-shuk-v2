import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { resetUser, UserType } from '../slices/userSlice/userSlice';
import { useNavigate } from 'react-router';

const InitPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, tokenExp } = useSelector<RootState, UserType>(({ user }) => user);

  useEffect(() => {
    if (tokenExp! < Date.now()) {
      dispatch(resetUser())
      return navigate('/login')
    }

    navigate(id ? '/home' : '/login')
  } , [tokenExp, id])

  return <div />
}

export default InitPage;
