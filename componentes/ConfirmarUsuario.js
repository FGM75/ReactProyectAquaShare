import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-native';
import { API_URL } from '@env';

const ConfirmarUsuario = ({ children }) => {
  const { idUser } = useParams();
  const checkIdUsuario = useCallback(async () => {
    try {
      const resp = await fetch(
        `${API_URL}usuarios/usuario/${idUser}`
      );
      if (!resp.ok) {
        throw new Error('Usuario no encontrado');
      }
    } catch (error) {
      console.error(error);
      // Manejo de errores, puedes navegar a una pantalla de registro o mostrar un mensaje de error
    }
  }, [idUser]);

  useEffect(() => {
    checkIdUsuario();
  }, [checkIdUsuario]);

  return children;
};

export default ConfirmarUsuario;
