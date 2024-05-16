import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PayExit = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source={require('../img/logo.png')} style={{width: 200, height: 200, marginTop: 20}} />
      <View style={styles.target}>
      <Text style={styles.targetText}>¡Tu pago del servicio se realizó con éxito!</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('formTaxista')}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      top: 70,
      alignItems: 'center', 
    },
    target:{
        marginTop: 70,
        width: "75%",
        height: "20%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderColor: "lightgray",
        margin: 10,
        backgroundColor: "lightblue",
    },
    targetText: {
        fontSize: 20,
        fontWeight: "bold",  
        textAlign: "center", 
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 200,
      },
      buttonText: {
        fontSize: 18,
        color: '#fff',
      },
  });

export default PayExit;