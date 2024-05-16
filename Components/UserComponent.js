import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import perfil from "../img/user.png";
import { AirbnbRating } from "react-native-ratings";
import CirculoStatus from "./CirculoStatus";

const UserComponent = ({ user, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.userContainer}>
        <Image style={styles.img} source={perfil} />
        <Text style={styles.userName}>{user.name}</Text>
        {/* <Text style={styles.userEmail}>{user.email}</Text> */}
         <View style={styles.status}>
         <View style={styles.circulos}>
            <Text>Estatus</Text>
            <CirculoStatus estado={user.estatus} />
          </View>

          <AirbnbRating
            count={5}
            showRating={false}
            defaultRating={4}
            size={20}
          />
        </View> 
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "gray",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "gray",
  },
  img: {
    width: 80,
    height: 80,
  },
  status: {
    display: "flex",
    gap: 10,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  circulos: {
    display: "flex",
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default UserComponent;
