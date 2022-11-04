import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableHighlight, Image, Button } from 'react-native';

export default function App() {
  const handlePress = () => {
    console.log("Text pressed")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React Native</Text>
      <TouchableHighlight onPress={() => console.log('image tapped')}>
        <Image 
          source={{ 
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"}} />
      </TouchableHighlight>
      <StatusBar style="auto" />
      {/* <Button color="orange" title='Click Me' onPress={() => console.log("button tapped")}/> */}
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
