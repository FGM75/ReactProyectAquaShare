import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AiFillGithub style={styles.icon} />
        <AiOutlineTwitter style={styles.icon} />
        <AiOutlineInstagram style={styles.icon} />
      </View>
      <View style={styles.copyrightContainer}>
        <Text style={styles.text}>
          © 2024. Todos los derechos reservados.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    position: 'relative',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    marginHorizontal: 10,
  },
  copyrightContainer: {
    alignItems: 'center',
  },
  text: {
    color: '#777',
    fontSize: 12,
  },
});

export default Footer;
