import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const DescriptionInput = ({ onSaveDescription }) => {
  const [description, setDescription] = useState('');

  const handleSaveDescription = () => {
    onSaveDescription(description);
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingrese una descripción"
        onChangeText={text => setDescription(text)}
        value={description}
        multiline
      />
      <Button title="Guardar Descripción" onPress={handleSaveDescription} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default DescriptionInput;
