import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FormTaxista from '../Components/FormTaxista';
import navigation from '../Navigation';

const ScreenRegisterTaxista = ({navigation}) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.tittle}>Rellena los siguientes campos</Text>
       < FormTaxista navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    flex: 1,
    marginTop: 50,
    
    
  },
  tittle: {
    top: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  }

});

export default ScreenRegisterTaxista;