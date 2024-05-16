import React from "react";
import { View, Text, Image, Button, StyleSheet} from "react-native";



// TODO: Crear componente de perfil de taxista

const ScreenUserTaxista = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={{
          uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dperfil&psig=AOvVaw2yt_T9z_xNaf84cWewkcOY&ust=1715795026894000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiMv9rYjYYDFQAAAAAdAAAAABAM',
        }}
      />
      <Text style={styles.name}>Juan Jose Perez Perez</Text>
      <Text style={styles.age}>Edad: 35 años</Text>
      <Text style={styles.rating}>Calificación ✶✶✶✶✶</Text>
      <Text style={styles.status}>DISPONIBLE</Text>
      <Button title="ACTUALIZAR" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    top: 50,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  age: {
    fontSize: 18,
    marginBottom: 10,
  },
  rating: {
    fontSize: 18,
    marginBottom: 10,
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ScreenUserTaxista;