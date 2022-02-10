import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SalonList from './SalonList';
import SalonListDetails from './SalonListDetails';
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();
export default Navigator= () => {
  return (
      <NavigationContainer>
        <StatusBar hidden />
          <Stack.Navigator
            initialRouteName="Salon"
              screenOptions={{
                header: ()=>null
              }}
          >
              <Stack.Screen
                  name="Salon"
                  component={SalonList}
              />
              <Stack.Screen
                  name="SalonListDetail"
                  component={SalonListDetails}
              />
          </Stack.Navigator>
      </NavigationContainer>
    )
};