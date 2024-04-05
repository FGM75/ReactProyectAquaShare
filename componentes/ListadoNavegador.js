import React from 'react';
import { View } from 'react-native';
import LinkNavegacion from './LinkNavegacion'; // Importar el componente LinkNavegacion

const ListadoNavegador = ({ logueado, mobile, showNavItems }) => {
  return (
    <View style={!mobile ? styles.container : styles.mobileContainer}>
      <LinkNavegacion
        texto="Inicio"
        redireccion="/inicio"
        clase="text-dark"
        mobile={mobile}
        showNavItems={showNavItems}
      />
      <LinkNavegacion
        texto="Sobre Nosotros"
        redireccion="/about"
        clase="text-dark"
        mobile={mobile}
        showNavItems={showNavItems}
      />
      {!logueado ? (
        <LinkNavegacion
          texto="Iniciar Sesión"
          redireccion="/login"
          clase="color-link-page"
          mobile={mobile}
          showNavItems={showNavItems}
        />
      ) : (
        <>
          <LinkNavegacion
            texto="Bandeja de solicitudes"
            redireccion="/solicitudes"
            clase="text-dark"
            mobile={mobile}
            showNavItems={showNavItems}
          />
          <LinkNavegacion
            texto="Cerrar Sesión"
            redireccion="/logout"
            clase="color-link-page"
            mobile={mobile}
            showNavItems={showNavItems}
          />
        </>
      )}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
    justifyContent: 'space-around',
  },
  mobileContainer: {
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    alignItems: 'flex-end',
  },
};

export default ListadoNavegador;
