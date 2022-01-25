import React, { Dispatch, SetStateAction, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../../components/form/Form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { dataBase } from '../../../../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import UserContext from '../../../../context/UserContext';

interface LoginProps {
  setIsPageLoad: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsPageLoad }): JSX.Element => {
  const push = useNavigate();
  const { setUserData } = useContext(UserContext);
  const checkIsAdmin = async (uid: string) => {
    const userDoc = await getDoc(doc(dataBase, 'users', `${uid}`));
    return userDoc.data();
  };

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUserData({
          isAuth: true,
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        });
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
