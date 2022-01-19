import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../../../components/form/Form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../../../../store/slices/userSlice';
import { useAppDispatch } from '../../../../hooks/redux-hooks';
import { doc, setDoc } from 'firebase/firestore';
import { dataBase } from '../../../../firebase/firebase';

const SingUp: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const push = useNavigate();
  const setUserToFirestore = async (email: string | null, uid: string) => {
    await setDoc(doc(dataBase, `users`, `${uid}`), { isAdmin: false, name: email });
  };

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
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
