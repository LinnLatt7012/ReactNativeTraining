import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import SalonList from './SalonList';
import SalonListDetails from './SalonListDetails';
import { StatusBar } from 'expo-status-bar';
enableScreens()
const Stack = createSharedElementStackNavigator();
export default Navigator= () => {
  return (
      <NavigationContainer>
        {/* <StatusBar hidden /> */}
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
                  sharedElements={(route, otherRoute, showing) => {
                    const {item} = route.params;
                      // console.log(item);
                    return [
                      {
                          id: `item.${item.key}.bg`
                      },
                      {
                          id:`item.${item.key}.name`,
                          animation: 'move',
                          resize: 'clip'
                      },
                      {
                          id:`item.${item.key}.image`,
                      },
                      {
                          id:"general.bg",
                      },
                    ]
                  }}
              />
          </Stack.Navigator>
      </NavigationContainer>
    )
};