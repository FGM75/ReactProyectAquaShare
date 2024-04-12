import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre nosotros</Text>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Historia</Text>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aquatravel-f70b5.appspot.com/o/aquaTravel.png?alt=media' }}
            style={styles.image}
          />
        </View>
        <Text style={styles.paragraph}>
          AquaTravel fundada en 2021, en un bootcamp de JavaScript, ha pasado de ser una idea pequeña a una página que cumplirá con la misión de descubrir el mundo de forma más fácil para todos.
        </Text>
        <Text style={styles.paragraph}>
          AquaTravel apuesta por la tecnología para viajar a lugares por descubrir. Conectando a millones de viajeros con experiencias únicas, y diversas opiniones para crear una comunidad de exploradores.
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Fundadores</Text>
        <View style={styles.foundersContainer}>
          <Image
            source={require('./fotoxavi.jpg')}
            style={styles.founderImage}
          />
          <Image
            source={require('./fotofelipe.jpg')}
            style={styles.founderImage}
          />
          <Image
            source={require('./fotoalex.jpg')}
            style={styles.founderImage}
          />
          <Image
            source={require('./fotomichael.jpg')}
            style={styles.founderImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 290,
    height: 291,
  },
  paragraph: {
    marginBottom: 10,
  },
  foundersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  founderImage: {
    width: '48%', // Cambiar el tamaño según tus necesidades
    aspectRatio: 1, // Mantener una relación de aspecto cuadrada
    marginBottom: 10,
  },
});

export default About;
