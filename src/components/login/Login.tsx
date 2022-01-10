import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../form/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux-hooks';

const Login: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        console.log(user.refreshToken);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        push('/');
      })
      .catch(() => alert('Invalid user!'));
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export default Login;
