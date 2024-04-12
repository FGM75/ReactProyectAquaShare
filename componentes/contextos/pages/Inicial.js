import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FaPlus } from "react-icons/fa"; // No disponible en React Native
import { TouchableOpacity } from "react-native-gesture-handler"; // Necesario para botón en React Native

export const Inicial = () => {
  const [coordenadas, setCoordenadas] = useState({ latitude: 41.4036299, longitude: 2.1743558 });
  const [listadoPuntos, setListadoPuntos] = useState([]);

  useEffect(() => {
    // Aquí puedes cargar los puntos de la API
    // Usar una función como cargarPuntos()
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{
        latitude: coordenadas.latitude,
        longitude: coordenadas.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
        <Marker coordinate={coordenadas} title="Estas Aqui!" />
        {listadoPuntos.map((punto) => (
          <Marker
            key={punto._id}
            coordinate={{ latitude: +punto.latitud, longitude: +punto.longitud }}
            // Personalizar el marcador según tus necesidades
          />
        ))}
      </MapView>
      <TouchableOpacity style={styles.button}>
        {/* Agregar funcionalidad para crear un nuevo punto */}
        <Text style={styles.buttonText}><FaPlus /></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 10,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
});
