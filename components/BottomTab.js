import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function BottomTab() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={28} color="white" />
      <Ionicons name="search" size={28} color="white" />
      <Ionicons name="add-circle" size={35} color="white" />
      <Ionicons name="chatbox" size={28} color="white" />
      <Ionicons name="person" size={28} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});