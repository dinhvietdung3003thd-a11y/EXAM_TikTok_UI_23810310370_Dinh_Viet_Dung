import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MusicBar() {
  return (
    <View style={styles.container}>
      <Ionicons name="musical-notes" size={16} color="white" />

      <Text style={styles.text} numberOfLines={1}>
        Roddy Roundicch - The Rou • Original sound
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 70,
    left: 12,
    right: 80,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  text: {
    color: "white",
    fontSize: 13,
    flex: 1,
  },
});