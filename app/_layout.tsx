import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from 'expo-splash-screen';

// For testing: Show splash screen for at least 5 seconds
// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 5000);

export default function RootLayout() {
  return (
    <>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    <StatusBar style="light" />
    </>
  );
}
