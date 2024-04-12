import React, { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

export const CrearPunto = () => {
  const [imagen, setImagen] = useState(null);

  const seleccionarImagen = () => {
    const options = {
      title: "Selecciona una imagen",
      cancelButtonTitle: "Cancelar",
      takePhotoButtonTitle: "Tomar foto",
      chooseFromLibraryButtonTitle: "Elegir de la galería",
      mediaType: "photo",
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };
        setImagen(source);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Seleccionar imagen" onPress={seleccionarImagen} />
      {imagen && <Image source={imagen} style={styles.imagen} />}
      {/* Resto del formulario */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imagen: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
});
