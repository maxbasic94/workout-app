import React, { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../../components/form/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../../store/slices/userSlice';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import { dataBase } from '../../../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface LoginProps {
  setIsPageLoad: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsPageLoad }): JSX.Element => {
  const dispatch = useAppDispatch();
  const push = useNavigate();
  const checkIsAdmin = async (uid: string) => {
    const userDoc = await getDoc(doc(dataBase, 'users', `${uid}`));
    return userDoc.data();
  };

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        setIsPageLoad(false);
        checkIsAdmin(user.uid)
          .then((data) => {
            data?.isAdmin ? push('/admin') : push('/user');
          })
          .then(() => {
            setIsPageLoad(true);
          });
      })
      .catch(() => alert('Invalid user!'));
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export default Login;
