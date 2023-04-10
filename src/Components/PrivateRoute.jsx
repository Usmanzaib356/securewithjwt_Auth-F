import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth  from '../hooks/useAuth';
import Products from '../Components/Products';

    function PrivateRoute({ element, ...rest }) {
  const { islogin } = useAuth();

  return (
    <Route
      {...rest}
      element={islogin ? (
        <Products/>
      ) : (
        <Navigate to="permission" />
      )}
    />
  );
}

export default PrivateRoute;
