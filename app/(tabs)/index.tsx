import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router"
import { useState } from "react"

import ImageViewer from "@/components/ImageViewer"
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker"

const PlaceHolder = require('@/assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1
  })

  if (!result.canceled) {
    setSelectedImage(result.assets[0].uri)
  } else {
    alert("You did not select any image")
  }

}

  return (
    <View style={styles.container} >
      <Text style={styles.text}>
        Home Screen.
      </Text>
      <Link href="/about" style={styles.button}>
        Go to Account Screen
      </Link>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={PlaceHolder} seletectImage={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
  },
  text: {
    color: '#fff'
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
})
