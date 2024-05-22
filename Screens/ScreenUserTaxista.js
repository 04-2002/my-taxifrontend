import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Disponibilidad from './DisponibilidadScreen';

const ScreenUserTaxista = () => {
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
        <View style={styles.estado}>
        <Text style={styles.titulostatus}>
          Mi estatus
        </Text>
        <TouchableOpacity>
            <FontAwesome style={styles.statusO} name="circle" size={60} color="black" />
        </TouchableOpacity>
        </View>
        <View style={styles.ds}>
        <View style={styles.disponibilidad}>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>DISPONIBLE</Text>
          <FontAwesome name="circle" size={45} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>OCUPADO</Text>
          <FontAwesome name="circle" size={45} color="yellow" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusText}>NO LABORANDO</Text>
          <FontAwesome name="circle" size={45} color="red" />
        </TouchableOpacity>
        </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    top: 50,
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
  
  statusButton: {
    height:66,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom: 30,
  },
  statusText: {
    fontSize: 18,
  },
  ds:{
   flex:1,
   marginTop:120,
   alignItems:'center',
   flexDirection:'row',
   
  },
  disponibilidad: {
    top:100,
  },
  titulostatus: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center"
  },
  statusO: {
    top: 35,
    alignSelf: "center",
  }

});

export default ScreenUserTaxista;

