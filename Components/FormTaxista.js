import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native';
/* import { TouchableOpacity, Text } from 'react-native-gesture-handler'; */

const FormTaxista = ({navigation}) => {
  const [type, setType] = useState('');
  const [model, setModel] = useState('');
  const [economicNumber, setEconomicNumber] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

/*   const handleSave = () => {
    // Save the form data to your backend or storage
    console.log({
      type,
      model,
      economicNumber,
      plateNumber,
      licenseNumber,
      birthdate,
      phoneNumber,
    });
  };
 */
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tipo de vehiculo"
        value={type}
        onChangeText={(text) => setType(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo de vehiculo"
        value={model}
        onChangeText={(text) => setModel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número economico"
        value={economicNumber}
        onChangeText={(text) => setEconomicNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de placas"
        value={plateNumber}
        onChangeText={(text) => setPlateNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de licencia"
        value={licenseNumber}
        onChangeText={(text) => setLicenseNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={birthdate}
        onChangeText={(text) => setBirthdate(text)}
        keyboardType="numeric"
        maxLength={10}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de telefono"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="numeric"
        maxLength={10}
      />
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('formExit')} style={styles.button}>
      <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
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

export default FormTaxista;