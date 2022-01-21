import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

const PrivateRoute: React.FC = ({ children }): JSX.Element => {
  const { isAuth } = useAuth();

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
