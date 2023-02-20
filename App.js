//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Search from "./cc/Search";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
    </SafeAreaView>
  );
}
//<StatusBar style="auto" />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
