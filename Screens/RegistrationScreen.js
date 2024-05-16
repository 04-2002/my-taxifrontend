import React, { useState } from 'react'
import { Text, View, Image, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Axios from '../Axios'

const RegistrationScreen = () => {
  const [name, setName] = useState('')
  const [isCorrecto, setIsCorrecto] = useState(null);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigation = useNavigation()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const emailInputText = 'Correo electrónico';
const emailInputErrorMessage = 'El correo electrónico es obligatorio';
const [emailError, setEmailError] = useState(false);

// Agregar la expresión regular para validar el correo electrónico
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailProviderRegex = /(gmail|hotmail|outlook|yahoo)\.com$/i;
const isValidEmail = (email) => emailRegex.test(email) && emailProviderRegex.test(email);

const registrar = async() => {
  try{
    const usuario = await Axios.post("/auth/crear-usuario", {
    usuario: email,
	  nombres: name,
	  apepat: null,
	  pemat: null,
	  password: password,
	  rol: 1,
	  fecha_nacimiento: null,
	  telefono: null,
	  estatus: null,
    })
    setIsCorrecto(true);
    handleRegistration({navigation});
    navigation.navigate("HomeScreen")
  }catch(err){
    setIsCorrecto(false);
    console.log(err);
  }
}


  const handleRegistration = () => {
    // Validar correo, contraseña y confirmación de contraseña
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setError('Por favor complete todos los campos.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    // Registrar usuario y navegar a la pantalla de inicio
    setLoading(true)
    setTimeout(() => {
      navigation.navigate('HomeScreen')
    }, 2000)
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../img/logo.png')}/>
      <Text style={styles.title}>Registrate</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre Completo"
          placeholderTextColor="gray"
          value={name}
          onChangeText={text => setName(text)}
          returnKeyType="done"
          onSubmitEditing={handleRegistration}
          autoCapitalize="words"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder={emailInputText}
          placeholderTextColor="gray"
          value={email}
          onChangeText={(text) => {
            const emailRegexMatched = isValidEmail(text);
            setEmail(text);
            setEmailError(!emailRegexMatched);
          }}
          keyboardType="email-address"
          returnKeyType="done"
          onSubmitEditing={handleRegistration}
          autoCapitalize="none"
          autoCorrect={false}
          error={emailError}
          errorMessage={emailInputErrorMessage}
        />
        {emailError && <Text style={styles.errorText}>El correo electrónico no es válido</Text>}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleRegistration}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleRegistration}
          autoCapitalize="none"
          autoCorrect={false}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        <Button
          title={loading ? 'Registrando...' : 'Registrarse'}
          onPress={registrar}
          disabled={loading}
          style={styles.button}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    top: 50,
    alignItems: 'center', 
    backgroundColor: '#f9a800',
    

  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    top: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
  },
  formContainer: {
    marginTop: 50,
    width: '100%',
    maxWidth: 340,
    marginBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default RegistrationScreen;
