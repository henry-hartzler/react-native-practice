import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1
    }}
    >
      <View style={{
        backgroundColor: "dodgerblue",
        flex: 2
      }}
      />
      <View style={{
        backgroundColor: "gold",
        flex: 1
      }}
      />
      <View style={{
        backgroundColor: "tomato",
        flex: 1
      }}
      />
    </View>
  );
}

//ctrl + space gives acceptable options list

//conventionally, styles are written below their component
//video paused at 1:09:59 StyleSheets
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
