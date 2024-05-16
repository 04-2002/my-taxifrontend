import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const redirectToLogin = () => {
      navigation.navigate('Login');
    };

    const timer = setTimeout(redirectToLogin, 3000);

    return () => clearTimeout(timer);
  }, [navigation]); // Incluye 'navigation' en la lista de dependencias de useEffect

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Usa comillas simples para strings cortos
    alignItems: 'center',
    backgroundColor: '#f9a800',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default WelcomeScreen;