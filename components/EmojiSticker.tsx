import { View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
    top: number;
    imageSize: number;
    stickerSource?: ImageSource;
}


export default function EmojiSticker({ top, imageSize, stickerSource,  }: Props) {
    return (
      <View style={{ top: top }}>
        <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
      </View>
    );
  }