import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../../components/form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { dataBase } from '../../../../firebase/firebase';
import UserContext from '../../../../context/UserContext';

const SingUp: React.FC = (): JSX.Element => {
  const push = useNavigate();
  const { setUserData } = useContext(UserContext);

  const setUserToFirestore = async (email: string | null, uid: string) => {
    await setDoc(doc(dataBase, `users`, `${uid}`), { isAdmin: false, name: email, performed: [] });
  };

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setUserData({
          isAuth: true,
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        });
        setUserToFirestore(user.email, user.uid).then(() => {
          push('/user');
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return <Form title="register" handleClick={handleRegister} />;
};

export default SingUp;
