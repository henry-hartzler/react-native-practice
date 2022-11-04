import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Image, Alert, Button } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Text pressed")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <Button title='Click Me' 
      onPress={() => Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("yes")},
        {text: "No", onPress: () => console.log("no")}
        ])}/>
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
