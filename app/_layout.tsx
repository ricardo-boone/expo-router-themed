import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ThemeProvider, useTheme } from '@/styles/themeProvider';
import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const { theme } = useTheme();
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ThemeProvider>
            <RootStackLayout />
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}

function RootStackLayout() {
    const { theme } = useTheme();

    return (
        <Stack
            screenOptions={{
                headerTitle: "Home",
                headerStyle: { backgroundColor: theme.background }, // Apply theme background
                headerTintColor: theme.text, // Apply theme text color
            }}>
            <Stack.Screen name="index" />
        </Stack>
    )
}
