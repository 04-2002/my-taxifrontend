import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserComponent from "../Components/UserComponent";
import RoundedImage from "../Components/RoundedImage";
import useGetData from "../hooks/useGetData";
import Axios from "../Axios";



const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");



  useEffect(() => {
    Axios.get("/vehiculos")
      .then((res) => {
        const respuesta = res.data.response;
        const transformar = respuesta.map((el) => ({
          id: el.id_vehiculo,
          name: `Taxi ${el.numero_taxi}`,
          email: el.conductor.usuario,
          estatus: el.conductor.estatus,
        }));
        setUsers(transformar);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(users);



  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const handleUserTaxiPress = (user) => {
    console.log(data);
    navigation.navigate("TaxiDriveScreen" /* , { user } */);
  };

  const handleUserPress = () => {
    navigation.navigate("ScreenUser", {});
  };

  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <View>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          placeholder="Búsqueda"
          placeholderTextColor="gray"
          onChangeText={handleSearch}
        />
        <RoundedImage source={require("../img/logo.png")} />
      </View>

      <FlatList
        data={filteredUsers}
        renderItem={({ item }) => (
          <UserComponent user={item} onPress={handleUserTaxiPress} />
        )}
        /* keyExtractor={(item) => item.id.toString()} */
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
  },
  userContainer: {
    backgroundColor: "#fff",
    padding: 40,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    borderColor: "gray",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    backgroundColor: "#f9a800",
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 50,
    borderRadius: 5,
  },
  input: {
    width: 220,
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "lightgray",
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    left: 123, 
    top: 5, 
    borderColor: "#fff",
  },
});

export default HomeScreen;
