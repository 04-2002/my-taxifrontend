import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import PerfilCount from "../img/user.png";

const TaxiDriveScreen = ({ navigation }) => {
  return (  
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Image source={PerfilCount} style={styles.image} />
          </View>
          <View style={styles.encabezado}>
            <Text style={styles.name}>JUAN JOSE PEREZ PEREZ</Text>
            <Text style={styles.age}>EDAD: 35 AÑOS</Text>
            <Text style={styles.rating}>Calificación {"\u2605".repeat(5)}</Text>
          </View>
        </View>
        <View style={{ padding: 20 }}>
          <View style={styles.cardContent}>
            <View style={styles.card2}>
              <Text style={styles.label}>TIPO DE VEHICULO:</Text>
              <Text style={styles.value}>NISSAN TSURU</Text>
            </View>
            <View style={styles.card2}>
              <Text style={styles.label}>MODELO DE VEHICULO:</Text>
              <Text style={styles.value}>2017</Text>
            </View>
            <View style={styles.card2}>
              <Text style={styles.label}>NÚMERO ECONÓMICO:</Text>
              <Text style={styles.value}>01</Text>
            </View>
            <View style={styles.card2}>
              <Text style={styles.label}>NÚMERO DE PLACAS:</Text>
              <Text style={styles.value}>UVU-017-A</Text>
            </View>
            <View style={styles.card2}>
              <Text style={styles.label}>NÚMERO DE LICENCIA:</Text>
              <Text style={styles.value}>00000165423</Text>
            </View>
          </View>
          <View style={styles.botones}>
            <View style={styles.actionButton}>
              <Text
                style={styles.actionButtonText}
                onPress={() => navigation.navigate("ScreenExample")}
              >
                Calificar
              </Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionButtonText} >Llamar</Text>
            </View>
            <View style={styles.actionButton}>
              <Text
                style={styles.actionButtonText}
              >
                Volver
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    /* justifyContent: "center", */
    paddingTop: 10,
    alignItems: "center",
    top: 50,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    /* shadowColor: "#000", */
    /* shadowOffset: { width: 0, height: 2 }, */
    shadowRadius: 5,
    elevation: 5,
    width: "95%",
    backgroundColor: "white",
    //padding: 20,
  },
  cardHeader: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f9a800",
    flexDirection: "row",
    height: 120,
    borderRadius: 25,
  },

  card2: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#b8e4ff",
    height: 65,
    borderRadius: 25,
    marginHorizontal: 30,
  },

  encabezado: {
    display: "flex",
    marginLeft: 20,
    /* alignItems: "center", */
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  age: {
    fontSize: 16,
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    marginBottom: 20,
  },
  cardContent: {
    /* marginBottom: 20,
    alignItems: "center",
    padding: 30, */
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
  },

  actionButton: {
    backgroundColor: "#f9a800",
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 1,
    marginBottom: 15,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    alignContent: "center",
  },
  llamar: {
    backgroundColor: "green"
  }
});

export default TaxiDriveScreen;
