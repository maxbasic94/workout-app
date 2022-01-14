import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../../components/form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../../store/slices/userSlice';
import { useAppDispatch } from '../../../../hooks/redux-hooks';

const SingUp: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const push = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
      .catch(console.error);
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export default SingUp;
