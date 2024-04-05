import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../contextos/AuthContext';
import { Redirect } from 'react-router-native'; // Importa Redirect desde 'react-router-native'

const RutaProtegida = ({ children }) => {
  const { usuarioAutenticado } = useContext(AuthContext);

  useEffect(() => {
    if (!usuarioAutenticado) {
      // Realizar acciones adicionales si el usuario no está autenticado, como redirigir a la página de inicio de sesión
      // Por ejemplo:
      // history.push('/login');
    }
  }, [usuarioAutenticado]);

  // Si el usuario no está autenticado, redirige a la página de inicio de sesión
  if (!usuarioAutenticado) {
    return <Redirect to="/login" />;
  }

  // Si el usuario está autenticado, renderiza el contenido de la ruta protegida
  return children;
};

export default RutaProtegida;
