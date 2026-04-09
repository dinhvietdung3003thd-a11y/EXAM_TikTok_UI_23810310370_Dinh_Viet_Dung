import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ActionBar({ onCommentPress, showFollowBadge = false }) {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300",
          }}
          style={styles.avatar}
        />

        {showFollowBadge && (
          <View style={styles.plusBadge}>
            <Text style={styles.plusText}>+</Text>
          </View>
        )}
      </View>

      {/* Like */}
      <TouchableOpacity style={styles.iconBlock}>
        <Ionicons name="heart" size={32} color="white" />
        <Text style={styles.text}>328K</Text>
      </TouchableOpacity>

      {/* Comment */}
      <TouchableOpacity style={styles.iconBlock} onPress={onCommentPress}>
        <Ionicons name="chatbubble" size={30} color="white" />
        <Text style={styles.text}>578</Text>
      </TouchableOpacity>

      {/* Share */}
      <TouchableOpacity style={styles.iconBlock}>
        <Ionicons name="arrow-redo" size={30} color="white" />
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>

      {/* Disc */}
      <View style={styles.discWrapper}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300",
          }}
          style={styles.disc}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 12,
    bottom: 90,
    alignItems: "center",
  },

  avatarWrapper: {
    width: 52,
    height: 62,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 14,
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    borderColor: "#fff",
  },

  plusBadge: {
    position: "absolute",
    bottom: 0,
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#ff2d55",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#fff",
  },

  plusText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 18,
  },

  iconBlock: {
    alignItems: "center",
    marginBottom: 14,
  },

  text: {
    color: "white",
    fontSize: 13,
    marginTop: 4,
    fontWeight: "500",
  },

  discWrapper: {
    marginTop: 4,
    width: 44,
    height: 44,
    borderRadius: 22,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
    backgroundColor: "#222",
  },

  disc: {
    width: "100%",
    height: "100%",
    borderRadius: 22,
  },
});