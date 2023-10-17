import React from 'react';
import { useColorScheme } from 'nativewind';
import { StatusBar, StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 flex justify-center items-center dark:bg-neutral-900 space-y-6">
      <StatusBar barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'} />
      <View className="justify-center items-center space-x-2 space-y-2">
        <Text className="text-xl dark:text-white">Dark Mode</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>

      <Text className="mx-4 text-justify" style={colorScheme === 'dark' ? styles.textWhite : styles.textBlack}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero tempora fuga odit, earum numquam quis mollitia?
        In illum dolorem, harum accusantium at consequuntur nihil tempore voluptatibus voluptas vitae soluta voluptatum.
      </Text>
      <View className="h-48 w-full bg-indigo-400 dark:bg-emerald-400" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWhite: {
    color: 'white',
  },
  textBlack: {
    color: 'black',
  },
});
