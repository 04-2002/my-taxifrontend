import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link } from "@react-navigation/native";
import perfil1 from "../img/user.png";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const Configuraciones = ({ source, style, navigation }) => {
  return (
    <View>
      <View style={styles.cabecera}>
        <Image source={perfil1} style={[styles.image, style]} />
        <View style={styles.descripcion}>
          <Text>Jose Armando Cordero Mendoza</Text>
          <Text>aj3amdua@gmail.com</Text>
        </View>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.perfil}
          onPress={() => navigation.navigate("ScreenEdit")}
        ><AntDesign name="user" size={24} color="black" />
          <Text>Configurar mi perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.servicio} onPress={() => navigation.navigate("ScreenMsj")}>
        <FontAwesome6 name="taxi" size={24} color="black" />
          <Text>Agregar mi servicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sesion} onPress={() => navigation.navigate("Login")}>
          <Text>Cerrar sesión</Text>
        </TouchableOpacity>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    /* marginRight: 20, */
  
  
  },
  cabecera: {
    /* display: "flex", */
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    
    
  },
  container: {
    alignItems: "center",
    top: 0,
    gap: 50,
    marginTop: 150,
    
    
  },
  perfil: {
    width: 200,
    height: 50,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,

  },

  servicio: {
    width: 200,
    height: 50,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    flexDirection: "row",
    gap: 10,
  },
  sesion: {
    width: 200,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});

export default Configuraciones;
