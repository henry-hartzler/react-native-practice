import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Image, Button } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Text pressed")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <Button color="orange" title='Click Me' onPress={() => console.log("button tapped")}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
