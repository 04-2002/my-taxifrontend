import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';

const RoundedImage = ({ source, style }) => {
  return (
    <Link to={{ screen: 'ScreenUser', params: {} }}>
      <View style={styles.container}>
        <Image source={source} style={[styles.image, style]} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 20,
    
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default RoundedImage;