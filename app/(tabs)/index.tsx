import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router"
import { useState } from "react"

import ImageViewer from "@/components/ImageViewer"
import Button from "@/components/Button"
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";

import * as ImagePicker from "expo-image-picker"

const PlaceHolder = require('@/assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        allowsEditing: true,
        quality: 1
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
    } else {
      alert("You did not select any image")
    }

  }

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // TODO: 
  };

  const onSaveImageAsync = async () => {
    // TODO:
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
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => {setShowAppOptions(true)}}/>
      </View>)
      }
      
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
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})
