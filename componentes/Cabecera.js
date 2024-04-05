import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../contextos/AuthContext';
import ListadoNavegador from './ListadoNavegador';

const Cabecera = () => {
  const { logueado } = useContext(AuthContext);
  const [showItems, setShowItems] = useState(false);

  const showNavItems = () => {
    setShowItems(!showItems);
  };

  return (
    <View style={styles.cabecera}>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.logoContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
              <Image
                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aquatravel-f70b5.appspot.com/o/aquaTravel.png?alt=media' }}
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.menuIconContainer}>
            <TouchableOpacity style={styles.menuIcon} onPress={showNavItems}>
              <View style={styles.menuIconLine} />
              <View style={styles.menuIconLine} />
              <View style={styles.menuIconLine} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.navbarItems, showItems && styles.show]}>
        <ListadoNavegador logueado={logueado} mobile={true} showNavItems={showNavItems} />
      </View>
    </View>
  );
};

const styles = {
  cabecera: {
    backgroundColor: 'white',
    paddingTop: 10,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  menuIconContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  menuIcon: {
    padding: 10,
  },
  menuIconLine: {
    width: 30,
    height: 3,
    backgroundColor: 'black',
    marginVertical: 3,
  },
  navbarItems: {
    flexDirection: 'row',
    display: 'none',
  },
  show: {
    display: 'flex',
  },
};

export default Cabecera;
