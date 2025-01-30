import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "@/styles/themeProvider";

export default function Page() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.main}>
        <Text style={[styles.title, { color: theme.text }]}>Hello World</Text>
        <Text style={[styles.subtitle, { color: theme.textLight }]}>This is the first page of your app.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    // color: "#38434D",
  },
});
