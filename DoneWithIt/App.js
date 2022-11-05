import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: 'row'
    }}
    >
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100
      }}
      />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100
      }}
      />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
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
