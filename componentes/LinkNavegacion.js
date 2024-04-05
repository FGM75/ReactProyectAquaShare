import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LinkNavegacion = ({ texto, redireccion, clase, mobile, showNavItems }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    showNavItems(); // Si es necesario ocultar la navegación en dispositivos móviles
    navigation.navigate(redireccion);
  };

  return (
    <TouchableOpacity style={mobile ? styles.mobileItem : styles.item} onPress={handlePress}>
      <Text style={styles.link}>{texto}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: 10,
  },
  mobileItem: {
    marginBottom: 10,
  },
  link: {
    // Estilos de enlace
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LinkNavegacion;
