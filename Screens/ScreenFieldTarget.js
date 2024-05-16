import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PaymentForm = ({navigation}) => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Formato de pago</Text>
      <View style={styles.target}>
      <MaterialCommunityIcons name="integrated-circuit-chip" size={24} color="#E3A857" />
      <Text style={styles.textTargetNum}>Numero de la tarjeta {cardNumber}</Text>
      <Text style={styles.textTarget}>Propietario: {cardholderName}</Text>
      <View style={styles.expirationDateContainer}>
      <Text style={styles.textTarget}>Fecha de expiración: {expirationMonth}</Text>
      <Text style={styles.textTarget}>{expirationYear}</Text>
      </View> 
      <Text style={styles.textTarget}>CVV: {cvv}</Text>
      </View>
      
    <View style={styles.content}>
    <TextInput
        style={styles.input}
        placeholder="Propietario de la targeta"
        value={cardholderName}
        onChangeText={setCardholderName}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de la targeta"
        keyboardType="numeric"
        value={cardNumber}
        onChangeText={setCardNumber}
      />
      <View style={styles.expirationDateContainer}>
        <TextInput
          style={styles.input}
          placeholder="Mes"
          keyboardType="numeric"
          value={expirationMonth}
          onChangeText={setExpirationMonth}
        />
        <Text>/</Text>
        <TextInput
          style={styles.input}
          placeholder="Año"
          keyboardType="numeric"
          value={expirationYear}
          onChangeText={setExpirationYear}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="CVV"
        keyboardType="numeric"
        value={cvv}
        onChangeText={setCvv}
      />
      <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate("payexit")}>
        <Text style={styles.submitButtonText}>ACEPTAR</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,

  },
  target: {
    marginTop: 90,
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 5,
    position: 'absolute',
    width: '90%',
    alignSelf: "center",
    height:"30%",
    display: "flex",  
    justifyContent: "space-between"
  },
  tittle: {
   textAlign: "center",
   marginTop: 35,
   fontSize: 28,
   fontWeight: "bold",
   color: '#000',
  },

  content: {
   marginTop: 400,
   flexDirection: 'column',
   justifyContent: 'center',
   alignSelf: "center",
   /* backgroundColor: '#007AFF', */
   padding: 20,
   borderRadius: 5,
   width: '80%',
   position: 'relative',

   
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 10,
  },
  expirationDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  textTarget: {
  fontWeight: "bold",
  fontSize: 18,
  color: "#fff",
  },
  textTargetNum: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    },
});

export default PaymentForm;