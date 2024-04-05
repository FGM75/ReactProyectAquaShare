import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contextos/AuthContext';

const Logout = () => {
  const { desloguearUsuario } = useContext(AuthContext);

  useEffect(() => {
    desloguearUsuario();
  }, [desloguearUsuario]);

  return null;
};

export default Logout;
