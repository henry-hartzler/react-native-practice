import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,  
  SafeAreaView,
  Platform,
  View,
  Dimensions
} from 'react-native';

export default function App() {
  //helpful to check the dimensions of that phone - but doesnt respond to orientation changes
  console.log(Dimensions.get("screen"))

  return (
    //style on the right overwrites those to the left
    //SafeAreaView may only work on iOS
    <SafeAreaView style={[styles.container, containerStyle]}>
     <View style={{
      backgroundColor: 'dodgerblue',
      //density-independent pixels
      //physical pixels = DIPs x Scale Factor of device
      width: '100%',
      height: '30%'
     }}
     >

     </View>
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
