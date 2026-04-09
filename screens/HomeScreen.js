import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import VideoItems from "../components/VideoItems";
import CommentModal from "../components/CommentModal";

export default function HomeScreen() {
  const [showComments, setShowComments] = useState(false);
  const [activeTab, setActiveTab] = useState("forYou"); 
  // "forYou" hoặc "following"

  return (
    <View style={styles.container}>
      <VideoItems
        onCommentPress={() => setShowComments(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <CommentModal
        visible={showComments}
        onClose={() => setShowComments(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});