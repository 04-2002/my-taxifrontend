import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {Rating} from 'react-native-ratings';

const ScreenExample = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
  };

  const handleCalificar = () => {
    // Aquí puedes agregar la lógica para guardar la calificación del usuario
    console.log(`Calificación del usuario: ${rating}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Califica el servicio</Text>
      <Image source={require('../img/star_empty.png')} style={styles.image} />
      <View style={styles.content}>
        
        <Rating
          type="custom"
          ratingColor="#ffcc00"
          ratingBackgroundColor="#ddd"
          tintColor="#fff"
          startingValue={0}
          imageSize={40}
          onFinishRating={handleRating}
          style={styles.rating}
        >
          <Image source={require('../img/star_empty.png')} style={styles.star} />
          <Image source={require('../img/star_filled.png')} style={styles.star} />
        </Rating>
        {<TouchableOpacity style={styles.button} onPress={handleCalificar}>
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
    padding: 50,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    padding: 20,
    textAlign: "center",
    
  },

  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 100,

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

export default ScreenExample;