import React from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const data = Array(10).fill({
  name: "user",
  content: "Nice video 🔥",
});

export default function CommentsModal({ visible, onClose }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>579 comments</Text>
            <TouchableOpacity onPress={onClose}>
              <Text>X</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View style={styles.comment}>
                <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                <Text>{item.content}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
  },
  container: {
    height: "60%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  comment: {
    marginVertical: 5,
  },
});