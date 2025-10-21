import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";

export default function DeliveryAddressScreen({ navigation }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const handleProceed = () => {
    if (!name || !address || !city || !phone) {
      Alert.alert("Please fill all fields");
      return;
    }

    navigation.navigate("OrderSummary", {
      addressInfo: { name, address, city, phone },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery Address</Text>

      <TextInput placeholder="Full Name" style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder="Address" style={styles.input} value={address} onChangeText={setAddress} />
      <TextInput placeholder="City" style={styles.input} value={city} onChangeText={setCity} />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", color: "#FF7A00", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF7A00",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});
