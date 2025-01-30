import {StyleSheet} from "react-native";
import {useTheme} from "@/styles/themeProvider";

export const useGlobalStyles = () => {
  const {theme} = useTheme();

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    text: {
      color: theme.text,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme.text,
    },
    subtitle: {
      fontSize: 16,
      color: theme.textLight,
    },
    button: {
      backgroundColor: theme.primary,
      padding: 10,
      borderRadius: 8,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
    },
  });
};
