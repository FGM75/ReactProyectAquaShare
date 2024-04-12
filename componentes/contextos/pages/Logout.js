import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contextos/AuthContext";
import { AsyncStorage } from "react-native";

export const Logout = () => {
  const { desloguearUsuario } = useContext(AuthContext);

  useEffect(() => {
    const logout = async () => {
      try {
        // Eliminar el token de autenticación del almacenamiento local
        await AsyncStorage.removeItem("token");
        // Desloguear al usuario
        desloguearUsuario();
      } catch (error) {
        console.error("Error al desloguear:", error);
      }
    };

    logout(); // Llamar a la función de logout al montar el componente

    // No es necesario retornar nada en React Native
  }, [desloguearUsuario]);

  return null; // No retornar nada en React Native
};
