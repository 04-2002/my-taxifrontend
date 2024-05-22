import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import Axios from "../Axios";
import Auth from "../Provider/Auth";
/* import { TouchableOpacity, Text } from 'react-native-gesture-handler'; */

const FormTaxista = ({ navigation }) => {
  const { user } = useContext(Auth);
  const [type, setType] = useState("");
  const [model, setModel] = useState("");
  const [economicNumber, setEconomicNumber] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const registrar = async () => {
    try {
      await Axios.post(
        "/vehiculos/crear",
        {
          placas: plateNumber,
          modelo: model,
          numero_taxi: economicNumber,
          tipo_vehiculo: type,
          licencia: licenseNumber,
        },
        { headers: { Authorization: user.token || null } }
      );

      navigation.navigate("formExit");
    } catch (err) {
      console.log(user);
      Alert.alert("Error", "Error al guardar la información");
    }
  };

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
      <View>
        <TouchableOpacity onPress={registrar} style={styles.button}>
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
    borderColor: "#ccc",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "green",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    marginTop: 200,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default FormTaxista;
