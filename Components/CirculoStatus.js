import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Link } from "@react-navigation/native";

const CirculoStatus = ({ estado }) => {
  const status = [
    { status: "disponible", color: "green" },
    { status: "ocupado", color: "orange" },
    { status: "no-laborando", color: "red" },
  ];

  const color = estado
    ? status.find((el) => el.status === estado).color
    : status.find((el) => el.status === "Disponible").color;

  return <View style={{ ...styles.container, backgroundColor: color }}></View>;
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 100,
  },
});

export default CirculoStatus;
