import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OrderSummaryScreen({ route, navigation }) {
  const { addressInfo } = route.params;
  const [items, setItems] = useState([
    { id: 1, name: "Jollof Rice", price: 150 },
    { id: 2, name: "Chicken Lollipop", price: 120 },
  ]);

  const addItem = () => {
    const newId = items.length + 1;
    setItems([...items, { id: newId, name: `New Item ${newId}`, price: 100 }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  const handleProceed = () => {
    navigation.navigate("Payment", { total });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.title}>Order Summary</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={styles.itemRight}>
              <Text style={styles.price}>₹{item.price}</Text>
              <TouchableOpacity onPress={() => removeItem(item.id)}>
                <Ionicons name="trash" size={20} color="#c96d16ff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.addButton} onPress={addItem}>
        <Text style={styles.addText}>+ Add Item</Text>
      </TouchableOpacity>

      <View style={styles.summaryBox}>
        <Text>Subtotal: ₹{subtotal}</Text>
        <Text>Delivery Fee: ₹{deliveryFee}</Text>
        <Text style={styles.total}>Total: ₹{total}</Text>
      </View>

      <Text style={styles.addressTitle}>Deliver To:</Text>
      <Text>{addressInfo.name}</Text>
      <Text>{addressInfo.address}</Text>
      <Text>{addressInfo.city}</Text>
      <Text>{addressInfo.phone}</Text>

      <TouchableOpacity style={styles.button} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed to Payment</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", color: "#FCEA5C", marginBottom: 15 },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: { fontSize: 16 },
  itemRight: { flexDirection: "row", alignItems: "center", gap: 10 },
  price: { color: "#FCEA5C", fontWeight: "bold" },
  addButton: {
    borderColor: "#FCEA5C",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
  },
  addText: { color: "#FCEA5C", fontWeight: "bold" },
  summaryBox: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 10,
  },
  total: { fontWeight: "bold", color: "#FCEA5C" },
  addressTitle: { marginTop: 10, fontWeight: "bold" },
  button: {
    backgroundColor: "#FCEA5C",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  buttonText: { color: "#fff", fontWeight: "bold" },
});
