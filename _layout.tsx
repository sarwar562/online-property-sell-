import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const properties = [
    { id: "1", name: "Wazari House", location: "Krasmathang", price: "55,00,000" },
    { id: "2", name: "Guest House", location: "Astana", price: "75,00000" },
    { id: "3", name: "4 Bad House", location: "Alamdar Chok", price: "95,00,000" },
    { id: "4", name: "Ali House", location: "Olding", price: "35,00000" },
    { id: "5", name: "khawaja House", location: "khardrong", price: "40,00,000" },
  ];

  const [selectedProperty, setSelectedProperty] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [booking, setBooking] = useState(null);

  const bookProperty = () => {
    if (!selectedProperty || customerName === "" || phone === "") {
      alert("Please fill all fields.");
      return;
    }

    setBooking({
      customer: customerName,
      phone: phone,
      property: selectedProperty.name,
      location: selectedProperty.location,
      price: selectedProperty.price,
    });

    setCustomerName("");
    setPhone("");
    setSelectedProperty(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Online Property Sell In Skardu</Text>

      <Text style={styles.heading}>Available Properties</Text>

      <FlatList
        data={properties}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.card,
              selectedProperty?.id === item.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedProperty(item)}
          >
            <Text style={styles.propertyName}>{item.name}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Price: {item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Customer Name"
        value={customerName}
        onChangeText={setCustomerName}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity style={styles.button} onPress={bookProperty}>
        <Text style={styles.buttonText}>Property Sell</Text>
      </TouchableOpacity>

      {booking && (
        <View style={styles.confirmBox}>
          <Text style={styles.confirmTitle}>Sell Confirmed</Text>
          <Text>Customer: {booking.customer}</Text>
          <Text>Phone: {booking.phone}</Text>
          <Text>Property: {booking.property}</Text>
          <Text>Location: {booking.location}</Text>
          <Text>Price: {booking.price}</Text>
          <Text style={styles.success}>
            Your Property Sell Successful!
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  selectedCard: {
    backgroundColor: "#d4edda",
  },
  propertyName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  confirmBox: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 8,
    backgroundColor: "#E8F5E9",
  },
  confirmTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
  success: {
    marginTop: 10,
    color: "green",
    fontWeight: "bold",
  },
});