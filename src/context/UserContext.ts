import React, { Dispatch, SetStateAction } from 'react';

interface UserContextInterface {
  userData: { isAuth: boolean; email: string | null; token: string | null; id: string | null };
  setUserData: Dispatch<
    SetStateAction<{
      isAuth: boolean;
      email: string | null;
      token: string | null;
      id: string | null;
    }>
  >;
}

const UserContext = React.createContext<UserContextInterface>({
  userData: { isAuth: false, email: '', token: '', id: '' },
  setUserData: () => null,
});

export default UserContext;
