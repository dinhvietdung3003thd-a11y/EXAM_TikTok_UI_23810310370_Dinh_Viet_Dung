import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Headers({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActiveTab("following")}>
        <Text
          style={[
            styles.text,
            activeTab === "following" ? styles.activeText : styles.inactiveText,
          ]}
        >
          Following
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab("forYou")}>
        <Text
          style={[
            styles.text,
            activeTab === "forYou" ? styles.activeText : styles.inactiveText,
          ]}
        >
          For You
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 55,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    zIndex: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "rgba(255,255,255,0.5)",
  },
});