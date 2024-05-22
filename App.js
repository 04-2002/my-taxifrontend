// App.js
import React, { useState } from 'react';
import Navigation from './Navigation'
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
import Checkout from './Components/CheckoutScreen';
/* import Auth from "./Provider/Auth"
 */
const App = () => {
  return (
    
    <StripeProvider
      publishableKey="pk_test_51P8akCRsR5dIzofuqhdwIcJg60W8pxAEt3mhSleFHD93w6YuD7Jx9djoR7m3YFId98E1seyzv2BQfTUBIASmbjtp006kXQCXIk"
      
    >
    <Navigation/>
    </StripeProvider>
   
  );
};

export default App;
