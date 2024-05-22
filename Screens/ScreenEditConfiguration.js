// UpdateProfile.js
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const UpdateProfile = ({ navigation }) => {
  const [name, setName] = useState('GUADALUPE LOPEZ VAZCAR');
  const [email, setEmail] = useState('vazcarlopezguadalupe8@gmail.co');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Actualizar datos</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Correo electrónico:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Contraseña actual:</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry
              value={currentPassword}
              onChangeText={text => setCurrentPassword(text)}
            />
            <Feather name="eye" size={20} color="gray" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nueva contraseña:</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              style={styles.passwordInput}
              secureTextEntry
              value={newPassword}
              onChangeText={text => setNewPassword(text)}
            />
            <Feather name="eye" size={20} color="gray" />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>GUARDAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: "#f9a800",
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
    
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 40,
    backgroundColor: "#fff",
    
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 40,
    backgroundColor: "#fff",
  },
  passwordInput: {
    flex: 1,
    paddingRight: 30,
    
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default UpdateProfile;