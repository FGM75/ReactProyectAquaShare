import React, { useCallback, useState } from 'react';
import { AsyncStorage } from 'react-native'; // Importar AsyncStorage en lugar de localStorage
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({ children }) => {
  const [logueado, setLogueado] = useState(false); // Iniciar sesión inicialmente como no logueado
  const [registrado, setRegistrado] = useState(false);

  // Función para loguear al usuario
  const loguearUsuario = useCallback(() => {
    setLogueado(true);
  }, []);

  // Función para desloguear al usuario
  const desloguearUsuario = useCallback(async () => {
    try {
      await AsyncStorage.removeItem('token'); // Eliminar el token de AsyncStorage
      setLogueado(false);
    } catch (error) {
      console.error('Error al desloguear:', error);
    }
  }, []);

  // Función para marcar al usuario como registrado
  const usuarioRegistrado = useCallback(() => {
    setRegistrado(true);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logueado,
        loguearUsuario,
        desloguearUsuario,
        registrado,
        usuarioRegistrado,
        setRegistrado,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
