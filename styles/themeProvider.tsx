import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme, Appearance } from 'react-native';

const LightTheme = {
    background: '#fff',
    text: '#000',
    textLight: '#222',
    primary: '#6200ee',
};

const DarkTheme = {
    background: '#222',
    text: '#eee',
    textLight: '#bbb',
    primary: '#bb86fc',
};

const ThemeContext = createContext({
    theme: LightTheme,
    toggleTheme: () => { }, // Default function (a no-op));
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    let systemColorScheme = useColorScheme(); // Light or Dark

    const [theme, setTheme] = useState(systemColorScheme === 'dark' ? DarkTheme : LightTheme);

    // Listen for theme changes dynamically
    useEffect(() => {
        const subscription = Appearance.addChangeListener(({ colorScheme }) => {
            setTheme(colorScheme === "dark" ? DarkTheme : LightTheme);
        });

        return () => subscription.remove(); // Cleanup listener on unmount
    }, []);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === LightTheme ? DarkTheme : LightTheme
        );
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
