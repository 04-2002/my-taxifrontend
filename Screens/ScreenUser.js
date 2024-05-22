import React, { useState, useEffect, useContext } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";
import Configuraciones from "../Components/Configuraciones";
import Auth from "../Provider/Auth";

const ScreenUser = ({ navigation }) => {
  const { user } = useContext(Auth);
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Mi Cuenta</Text>
      </View>

      <Configuraciones navigation={navigation} usuario={user} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    top: 50,
    height: 180,
    backgroundColor: "#f9a800",
    borderRadius: 10,
  },

  titulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 15,
  },
});
export default ScreenUser;
