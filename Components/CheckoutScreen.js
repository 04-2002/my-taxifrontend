import { View, Button, Alert } from "react-native";
import { useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect } from "react";
import { urlMain } from "../Axios";

export default function CheckoutScreen({ monto, navigation }) {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${urlMain}/api/payment-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ monto: 150 }),
    });

    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      merchantDisplayName: "Example, Inc.",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      allowsDelayedPaymentMethods: true,
      defaultBillingDetails: {
        name: "Jane Doe",
      },
    });

    if (!error) {
      setLoading(true);
    } else {
      console.error(error);
      Alert.alert("Error al inicializar la hoja de pago", error.message);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      console.error(error);
      Alert.alert(
        `Error de pago: ${error.code}`,
        `Mensaje de error: ${error.message}`
      );
    } else {
      navigation.navigate("payexit");
      // Alert.alert("¡Éxito!", "¡Su pedido está confirmado!");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <View>
      <Button
        variant="primary"
        disabled={!loading}
        title="Pagar"
        onPress={openPaymentSheet}
      />
    </View>
  );
}
