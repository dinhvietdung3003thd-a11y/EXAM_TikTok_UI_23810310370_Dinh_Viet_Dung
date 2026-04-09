import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function VideoInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>@craig_love</Text>

      <Text style={styles.desc}>
        The most satisfying Job #fyp #satisfying #roadmarking
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 110,
    left: 12,
    right: 80,
  },

  username: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
  },

  desc: {
    color: "white",
    fontSize: 14,
    lineHeight: 20,
  },
});