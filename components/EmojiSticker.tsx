import { View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
    top: number;
    imageSize: number;
    stickerSource?: ImageSource;
}


export default function EmojiSticker({ top, imageSize, stickerSource,  }: Props) {
    const scaleImage = useSharedValue(imageSize)
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)

    const imageStyle = useAnimatedStyle(() => {
        return {
            width: withSpring(scaleImage.value),
            height: withSpring(scaleImage.value)
        }
    })

    const doubleTap = Gesture.Tap()
        .numberOfTaps(2)
        .onStart(() => {
            if (scaleImage.value !== imageSize * 2) {
                scaleImage.value = scaleImage.value * 2
            } else {
                scaleImage.value = Math.round(scaleImage.value / 2)
            }
        })

    const containerStyle = useAnimatedStyle(() => {
        return {
            transform: [ 
                { translateX: translateX.value },
                { translateY: translateY.value }
            ]
        }
    })

    const drag = Gesture.Pan().onChange(event => {
        translateX.value += event.changeX;
        translateY.value += event.changeY;
    })

    return (
      <GestureDetector gesture={drag}>
        <Animated.View style={[ containerStyle, {top: top}]}>
            <GestureDetector gesture={doubleTap}>
                <Animated.Image 
                    source={stickerSource}
                    resizeMode="contain"
                    style={[imageStyle, { width: imageSize, height: imageSize }]} 
                />
            </GestureDetector>
        </Animated.View>
      </GestureDetector>
    );
  }