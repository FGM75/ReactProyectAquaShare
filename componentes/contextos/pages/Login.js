import React, { useContext, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AuthContext } from '../../contextos/AuthContext';

const Login = () => {
  const { loguearUsuario } = useContext(AuthContext);
  const [datosLogin, setDatosLogin] = useState({ usuario: '', contrasenya: '' });
  const [error, setError] = useState(false);

  const setDatos = (campo, valor) => {
    setDatosLogin({ ...datosLogin, [campo]: valor });
  };

  const enviarFormulario = async () => {
    try {
      const resp = await fetch('http://tu_servidor/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosLogin),
      });
      if (!resp.ok) {
        setError(true);
        return;
      }
      setError(false);
      const { token } = await resp.json();
      // Aquí podrías almacenar el token en AsyncStorage en lugar de localStorage
      loguearUsuario();
      // Navegar a la pantalla de inicio después de iniciar sesión exitosamente
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={datosLogin.usuario}
        onChangeText={(valor) => setDatos('usuario', valor)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={datosLogin.contrasenya}
        onChangeText={(valor) => setDatos('contrasenya', valor)}
      />
      {error && <Text style={styles.error}>Fallo al loguear el usuario!</Text>}
      <TouchableOpacity style={styles.button} onPress={enviarFormulario}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Color azul claro
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#21b6a8', // Color verde azulado
  },
  button: {
    width: '80%',
    padding: 15,
    backgroundColor: '#21b6a8', // Color verde azulado
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
