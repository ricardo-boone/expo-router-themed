# My Expo Template

This is a custom Expo template designed for quick project setup with theming, navigation, and pre-installed dependencies.

## 🚀 Getting Started

### **1️⃣ Create a New Project**

To start a new project using this template, run:

```sh
npx create-expo-app my-new-project --template https://github.com/YOUR_USERNAME/my-expo-template
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

### **2️⃣ Install Dependencies**

Once the project is created, navigate into the folder and install dependencies:

```sh
cd my-new-project
npm install
```

---

### **3️⃣ Run the Project**

Start the Expo development server:

```sh
npm start
# or
expo start
```

You can also run on specific platforms:

```sh
expo start --android
expo start --ios
expo start --web
```

---

## 📂 Project Structure

```
/my-new-project
 ├── app/                  # Expo Router pages
 │   ├── index.tsx         # Home screen
 │   ├── _layout.tsx       # Root layout (with ThemeProvider)
 │   ├── _root.tsx         # Custom Root Component
 │   ├── +not-found.tsx    # 404 page
 ├── components/           # Reusable UI components
 ├── styles/               # Global styles & theme
 ├── hooks/                # Custom hooks
 ├── assets/               # Images & fonts
 ├── package.json          # Dependencies
 ├── app.config.ts         # Expo config
 ├── tsconfig.json         # TypeScript config
```

---

## 🎨 Theming

This template includes a **ThemeProvider** for dark/light mode support.

```tsx
import {useTheme} from "@/styles/themeProvider";

const {theme} = useTheme();

<View style={{backgroundColor: theme.background}}>
  <Text style={{color: theme.text}}>Hello World</Text>
</View>;
```

To toggle the theme:

```tsx
const {toggleTheme} = useTheme();

<Button onPress={toggleTheme} title="Switch Theme" />;
```

---

## 📜 Features

✅ **Expo Router** for navigation  
✅ **Dark/Light Mode** with ThemeProvider  
✅ **Custom Fonts** (pre-configured)  
✅ **Splash Screen Handling** (using expo-splash-screen)  
✅ **Pre-installed Dependencies** like React Navigation & Reanimated

---

## 📖 Additional Commands

### **Linting & Formatting**

```sh
npm run lint
npm run format
```

### **Build & Publish**

```sh
expo build:android
expo build:ios
```

---

## 📌 Notes

- Ensure you have [Expo CLI](https://docs.expo.dev/get-started/installation/) installed.
- You can modify `app.config.ts` for app metadata.
- Modify `styles/themeProvider.tsx` to change theme settings.

---

## 👨‍💻 Contributing

If you find any issues or want to improve this template, feel free to open a pull request!

---

## 📜 License

This project is licensed under the MIT License. Feel free to use and modify as needed.

---

🚀 **Happy coding!** 🎉
