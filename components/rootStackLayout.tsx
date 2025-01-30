import { Stack } from "expo-router";
import { useTheme } from "@/styles/themeProvider";

export function RootLayout() {
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
    );
}