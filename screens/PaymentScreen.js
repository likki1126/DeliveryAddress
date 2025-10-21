import React from "react"; // Removed useState as it's no longer needed
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PaymentScreen({ route, navigation }) {
  const { total } = route.params;
  // const [method, setMethod] = useState("COD"); // No longer needed

  const handleCompleteOrder = () => {
    // Updated Alert message with a tick symbol
    Alert.alert(
      "Order Completed", // Title
      `✅ Your payment of ₹${total} is confirmed!`, // Message
    );
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Payment</Text>

      {/* Changed to a View since it's the only option and always selected */}
      <View style={[styles.option, styles.selected]}>
        <Text style={styles.optionText}>Cash on Delivery</Text>
      </View>

      {/* --- Card Payment option removed --- */}

      <View style={styles.summary}>
        <Text style={styles.total}>Total: ₹{total}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCompleteOrder}>
        <Text style={styles.buttonText}>Complete Order</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", color: "#FCEA5C", marginBottom: 20 },
  option: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },
  selected: { borderColor: "#FCEA5C", backgroundColor: "#FFF3E0" },
  optionText: { fontSize: 16 },
  summary: { marginTop: 20 },
  total: { fontSize: 18, fontWeight: "bold", color: "#FCEA5C" },
  button: {
    backgroundColor: "#FCEA5C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
