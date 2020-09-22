import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function PhotoPick({ state, setState }) {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult.uri);
    setState(pickerResult.uri);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: state }} style={styles.logo} resizeMode="contain" />
      <Text style={styles.instructions}>원하는 사진을 선택하세요.</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>가져오기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
          <Text style={styles.buttonText}>촬영하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#999",
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    color: "#999",
  },
});
