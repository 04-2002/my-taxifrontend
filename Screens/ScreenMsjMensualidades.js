import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import CheckoutScreen from '../Components/CheckoutScreen';

const ScreenMsjMensualidades = ({navigation}) => {
    

    return (
    <View style={styles.container}>
        <Text style={styles.tittle}>Mensualidades</Text>
            <View style={styles.contenedor}>
                <Text style={styles.tittle2}> PLAN</Text>
                <View style={styles.contenedor_hijo}>
                    <Text style={styles.mensaje}>
                        Daras a conocer la informacion necesaria para la contratación de tu servicio e incrementar tus ingresos
                    </Text>
                    </View>
                        <Text style={styles.precio}>
                            <FontAwesome name="dollar" size={35} color="black" /> 150
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FielTarget')}>
                            <Text style={styles.labelStyle}>Aceptar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('ScreenUser')}>
                            <Ionicons name="arrow-back-circle-outline" size={35} color="black" />
                        </TouchableOpacity>
                    
            </View>
            <CheckoutScreen/>
        </View>
    
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'white',
    top: 50,
    display: 'flex',
    alignItems: 'center',
    },

    tittle: {
        fontSize: 35,
        top: 40,
        fontWeight: "bold"
    },

    tittle2: {
        fontSize: 30,
        textAlign: "center",
        marginBottom: 80,
        fontWeight: "bold",
        top: 30,
    },

    contenedor: {
        backgroundColor: 'skyblue',
        marginTop: 100,
        width: 300,
        height: 600,
        borderRadius: 5,
    },

   contenedor_hijo: {
        height: 250,
        width: 200,
        backgroundColor: "white",
        justifyContent: "center",
        alignSelf: "center",
        marginBottom: 30,
        borderRadius: 5,
        lineHeight: 150,
        textAlign: "center",
    },
 
    button: {
        width: 150,
        height: 50,
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "lightgreen",
        borderColor: "white",
        borderWidth: 1.4,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
    },
    
    labelStyle: {
        textAlign: "center",
    },


    precio: {
        fontSize: 35,
        textAlign: "center",
        marginBottom: 20,
        fontWeight: "bold",
    },

    mensaje: {
        lineHeight: 30,
        textAlign: "center",
        fontSize: 20,
    },
    back: {
        alignItems: "center",
        marginTop: 20,
    },
    });

export default ScreenMsjMensualidades;