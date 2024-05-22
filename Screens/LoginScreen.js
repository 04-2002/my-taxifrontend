import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Axios from "../Axios";
import Auth from "../Provider/Auth";

const loginButtonText = "Iniciar sesión";
const googleSignInButtonText = "Registrarse con Google";
const facebookSignInButtonText = "Registrarse con Facebook";
const registerText = "¿No tienes una cuenta?";
const registerLinkText = "Registrate aquí";
const emailInputText = "Correo electrónico";
const passwordInputText = "Contraseña";
const emailInputErrorMessage = "El correo electrónico es obligatorio";
const passwordInputErrorMessage = "La contraseña es obligatoria";
const googleImageSource = require("../img/google.png");
const facebookImageSource = require("../img/facebook.png");

// Expresión regular para validar el correo electrónico
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const emailProviderRegex = /(gmail|hotmail|outlook|yahoo)\.com$/i;
const isValidEmail = (email) =>
  emailRegex.test(email) && emailProviderRegex.test(email);

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(Auth);
  const [isCorrecto, setIsCorrecto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);

  const login = async () => {
    try {
      const usuario = await Axios.post("/auth/login", {
        usuario: email,
        password: password,
      });

      setUser(usuario.data.response);
      setIsCorrecto(true);
      handleRegistration({ navigation });
      navigation.navigate("HomeScreen");
    } catch (err) {
      setIsCorrecto(false);
      setUser(null);
      console.log(err);
    }
  };
  useEffect(() => {
    const redirectToLogin = () => {};

    const timer = setTimeout(redirectToLogin, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  const handleRegistration = ({ navigation }) => {
    // Validar correo, contraseña y confirmación de contraseña
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    // Registrar usuario y navegar a la pantalla de inicio
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.logo} source={require("../img/logo.png")} />
        <View>
          <Text style={styles.titleLogin}>Iniciar Sesión</Text>
        </View>
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
        {emailError && (
          <Text style={styles.errorText}>
            El correo electrónico no es válido
          </Text>
        )}
        <TextInput
          style={styles.input}
          placeholder={passwordInputText}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          returnKeyType="done"
          onSubmitEditing={handleRegistration}
          autoCapitalize="none"
          autoCorrect={false}
          error={password === ""}
          errorMessage={passwordInputErrorMessage}
        />
        {
          <Text style={styles.advertence}>
            {isCorrecto != null &&
              (isCorrecto ? "Usuario correcto" : "Credenciales invalidas")}
          </Text>
        }
        <Button
          title={loginButtonText}
          onPress={login}
          /* disabled={email.trim() === '' || password.trim() === '' || emailError} */
        />
        <TouchableOpacity
          style={styles.googleButton} /*onPress={handleGoogleSignIn}*/
        >
          <Image style={styles.googleLogo} source={googleImageSource} />
          <Text style={styles.googleText}>{googleSignInButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.facebookButton} /*onPress={handleFacebookSignIn}*/
        >
          <Image style={styles.facebookLogo} source={facebookImageSource} />
          <Text style={styles.facebookText}>{facebookSignInButtonText}</Text>
        </TouchableOpacity>
        <Text style={styles.registerText}>
          {registerText}{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Registration")}
          >
            {registerLinkText}
          </Text>{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9a800",
  },
  box: {
    marginTop: 125,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 50,
  },
  input: {
    width: 300,
    height: 40,
    borderRadius: 10,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    textAlign: "center",
    backgroundColor: "white",
    margin: 10,
    color: "gray",
  },
  button: {
    width: 100,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    margin: 10,
  },
  googleButton: {
    width: 300,
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 0, // remove border
    marginTop: 30, // increase space
  },
  googleLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 30,
    borderRadius: 50,
  },
  googleText: {
    fontSize: 16,
    color: "gray",
  },
  facebookButton: {
    width: 300,
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b5998",
    borderWidth: 0, // remove border
    marginTop: 10,
  },
  facebookLogo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 20,
  },
  facebookText: {
    fontSize: 16,
    color: "#fff",
  },
  registerText: {
    fontSize: 16,
    color: "#000",
    marginTop: 20,
  },
  link: {
    color: "blue",
  },

  titleLogin: {
    color: "#000",
    fontSize: 25,
    marginTop: 0,
    fontWeight: "bold",
  },
  advertence: {
    color: "red",
  },
});

export default LoginScreen;
