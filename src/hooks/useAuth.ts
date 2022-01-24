import { useAppSelector } from './reduxHooks';

type Auth = {
  isAuth: boolean;
  email: string | null;
  token: string | null;
  id: string | null;
};

export function useAuth(): Auth {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
