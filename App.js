import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { ThemeContext } from './src/context/theme_context';
import { myColors } from './src/styles/colors';
import Button  from './src/components/button';
import MyKeyboard from './src/components/my_keyboard';
import { Styles } from './src/styles/global_style';

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === "light" ? styles.container : [styles.container, { backgroundColor: myColors.black }]}>
        <StatusBar style="auto" />
        <View style={Styles.rowLeft}>
        <Switch value={theme === "light"} onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}></Switch>

        </View>
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
