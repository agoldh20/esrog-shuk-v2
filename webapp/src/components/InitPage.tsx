import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { UserType } from '../slices/userSlice/userSlice';
import { useNavigate } from 'react-router';

const InitPage: FC = () => {
  const navigate = useNavigate();
  const userId = useSelector<RootState, number | undefined>(({ user }) => user.id);

  useEffect(() => {
    navigate(userId ? '/home' : '/login')
  } , [userId])

  return <div />
}

export default InitPage;
