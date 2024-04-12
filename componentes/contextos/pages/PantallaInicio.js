import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PantallaInicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AquaShare</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6', // Color azul claro
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Color blanco
  },
});

export default PantallaInicio;
