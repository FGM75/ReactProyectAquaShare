import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-native'; // Importar useHistory desde 'react-router-native'
import { AuthContext } from '../contextos/AuthContext';

const UsuarioRegistrado = ({ children }) => {
  const { registrado } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!registrado) {
      history.push('/register');
    }
  }, [registrado, history]);

  return children;
};

export default UsuarioRegistrado;
