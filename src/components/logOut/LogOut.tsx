import React from 'react';
import { removeUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { useAuth } from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';

const LogOut: React.FC = (): JSX.Element => {
  const { email } = useAuth();
  const push = useNavigate();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(removeUser());
    push('/login');
  };

  return (
    <>
      <button onClick={handleClick}>Log out from {email}</button>
    </>
  );
};

export default LogOut;
