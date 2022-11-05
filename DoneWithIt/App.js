import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Image, Alert, Button, Platform } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Text pressed")
  }

  return (
    //style on the right overwrites those to the left
    //SafeAreaView may only work on iOS
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <Button title='Click Me' 
      onPress={() => Alert.prompt("My title", "My message", text => console.log(text))}/>
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

//ctrl + space gives acceptable options list

//conventionally, styles are written below their component
//video paused at 1:09:59 StyleSheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
