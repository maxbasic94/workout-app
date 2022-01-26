import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { UserState } from '../types/types';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { dataBase } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

interface UseUserDataInterface {
  userData: UserState;
  isPageLoad: boolean;
  logOut: () => void;
  setIsPageLoad: Dispatch<SetStateAction<boolean>>;
  setUserData: Dispatch<SetStateAction<UserState>>;
}

const useUserData = (): UseUserDataInterface => {
  const [isPageLoad, setIsPageLoad] = useState(false);
  const [userData, setUserData] = useState<UserState>({
    isAuth: false,
    email: null,
    token: null,
    id: null,
  });
  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
    setUserData({
      isAuth: false,
      email: null,
      token: null,
      id: null,
    });
  };
  const push = useNavigate();
  const checkIsAdmin = async (uid: string) => {
    const userDoc = await getDoc(doc(dataBase, 'users', `${uid}`));
    return userDoc.data();
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          isAuth: true,
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        });
        setIsPageLoad(true);
        checkIsAdmin(user.uid).then((data) => {
          data?.isAdmin ? push('/admin') : push('/user');
        });
      } else {
        push('/login');
        setIsPageLoad(true);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { userData, setUserData, isPageLoad, setIsPageLoad, logOut };
};

export default useUserData;
