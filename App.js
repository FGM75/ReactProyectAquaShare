import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CameraComponent from './componentes/CameraComponent';
import DescriptionInput from './componentes/DescriptionInput';
import RegisterForm from './componentes/RegisterForm';

export default function App() {
  const [photoUri, setPhotoUri] = useState(null);
  const [description, setDescription] = useState('');

  const handlePhotoCapture = (uri) => {
    setPhotoUri(uri);
  };

  const handleSaveDescription = (text) => {
    setDescription(text);
  };

  return (
    <View style={styles.container}>
      <CameraComponent onPhotoCapture={handlePhotoCapture} />
      <DescriptionInput onSaveDescription={handleSaveDescription} />
      <RegisterForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
