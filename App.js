import Navigator from './components/Navigator';
// import SalonList from './components/cardNavigation/SalonList';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black, Inter_400Regular} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
      <Navigator />   
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
