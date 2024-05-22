import React from 'react';
import { Button, Text, View, StyleSheet, Touchable } from 'react-native';
import { Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Phone_call = () => {
  const handlePress = () => {
    const phoneNumber = '9341248565';
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <TouchableOpacity style={styles.actionButton}  >
     
        <Text style={styles.actionButtonText} onPress={handlePress}> 
          Llamar
        </Text>
          
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
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
});

export default Phone_call;