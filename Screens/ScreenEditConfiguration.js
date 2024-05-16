import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Rating} from 'react-native-ratings';

const ScreenEdit = () => {
  const [rating, setRating] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Título del servicio</Text>
        <Text style={styles.description}>Descripción del servicio</Text>

        {<TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Calificar</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  star: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#ffcc00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ScreenEdit;