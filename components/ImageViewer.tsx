import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imageSource: ImageSource,
    seletectImage?: string
}

export default function ImageViewer({imageSource, seletectImage}: Props) {
  const finalImageSource = seletectImage ? { uri: seletectImage } : imageSource
    return <Image source={finalImageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 320,
      borderRadius: 18,
    },
  });