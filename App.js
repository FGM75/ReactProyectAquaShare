import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContextProvider } from './componentes/contextos/AuthContextProvider';
import PantallaInicio from './componentes/contextos/pages/PantallaInicio';
import RegisterForm from './componentes/RegisterForm';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={PantallaInicio} />
          <Stack.Screen name="Registro" component={RegisterForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContextProvider>
  );
};

export default App;
