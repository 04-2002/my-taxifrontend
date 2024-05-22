import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Disponibilidad = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Juan Jose Perez Perez</Text>
        <Text style={styles.age}>35 años</Text>
      </View>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>Calificación</Text>
        <View style={styles.stars}>
          <Text style={styles.star}>✶</Text>
          <Text style={styles.star}>✶</Text>
          <Text style={styles.star}>✶</Text>
          <Text style={styles.star}>✶</Text>
        </View>
      </View>
      <View style={styles.status}>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>DISPONIBLE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>OCUPADO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>NO LABORANDO</Text>
        </TouchableOpacity>
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
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 18,
    color: '#666',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 18,
    marginRight: 10,
  },
  stars: {
    flexDirection: 'row',
  },
  star: {
    fontSize: 18,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  statusText: {
    fontSize: 18,
  },
});

export default Disponibilidad;