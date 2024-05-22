// Navigation.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screens/RegistrationScreen'; // Corrección en la importación
import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import HomeScreen from './Screens/HomeScreen';
import TaxiDriveScreen from './Screens/TaxiDriveScreen';
import ScreenUser from './Screens/ScreenUser';
import ScreenExample from './Screens/ScreenStart';
import ScreenEdit from './Screens/ScreenEditConfiguration'; 
import ScreenMsjMensualidades from './Screens/ScreenMsjMensualidades';
import PaymentForm from './Screens/ScreenFieldTarget';
import PayExit from './Screens/payExit';
import ScreenRegisterTaxista from './Screens/ScreenRegisterTaxista';
import FormTaxExit from './Screens/FormTaxExit';
import ScreenUserTaxista from './Screens/ScreenUserTaxista';
import Auth from './Provider/Auth';

import { CheckoutScreen } from "./Components/CheckoutScreen";

const Stack = createStackNavigator();

const Navigation = () => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName="Bienvenida">
        
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Bienvenida" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="TaxiDriveScreen" component={TaxiDriveScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenUser" component={ScreenUser} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenExample" component={ScreenExample} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenEdit" component={ScreenEdit} options={{ headerShown: false }} />
            <Stack.Screen name="ScreenMsj" component={ScreenMsjMensualidades} options={{ headerShown: false }} /> 
            <Stack.Screen name="FielTarget" component={PaymentForm} options={{ headerShown: false }} />
            <Stack.Screen name="payexit" component={PayExit} options={{ headerShown: false }} />
            <Stack.Screen name="formTaxista" component={ScreenRegisterTaxista} options={{ headerShown: false }} />
            <Stack.Screen name="formExit" component={FormTaxExit} options={{ headerShown: false }} />
            <Stack.Screen name="userTaxista" component={ScreenUserTaxista} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
};

export default Navigation;