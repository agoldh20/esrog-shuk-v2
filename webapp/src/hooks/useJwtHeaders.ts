import { AxiosHeaders, AxiosRequestHeaders } from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export const useJwtHeaders = () => {
  const jwt = useSelector<RootState, string>(({user}) => user.jwt);

  return {
    headers: {
      common: {
        Authorization: `Bearer ${ jwt }`,
      } as AxiosRequestHeaders,
    },
  };
};
