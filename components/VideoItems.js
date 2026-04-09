import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Headers from "./Headers";
import ActionBar from "./ActionBar";
import BottomTab from "./BottomTab";
import VideoInfo from "./VideoInfo";
import MusicBar from "./MusicBar";

export default function VideoItems({
  onCommentPress,
  activeTab,
  setActiveTab,
}) {
  const isForYou = activeTab === "forYou";

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: isForYou
            ? "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
            : "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
        }}
        style={styles.video}
      />

      <Headers activeTab={activeTab} setActiveTab={setActiveTab} />

      <ActionBar
        onCommentPress={onCommentPress}
        showFollowBadge={isForYou}
      />

      <VideoInfo />
      <MusicBar />

      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  info: {
    position: "absolute",
    bottom: 95,
    left: 12,
    right: 70,
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
  },
});