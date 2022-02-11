import { SafeAreaProvider } from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import SalonList from './cardNavigation/SalonList';
import SalonListDetails from './cardNavigation/SalonListDetails';
import { StatusBar } from 'expo-status-bar';
import FlatApp from './flatlist/FlatApp';
import FirstPage from './FirstPage';
import ShopApp from './shopApp/ShopApp';
enableScreens()
const Stack = createSharedElementStackNavigator();
export default Navigator= () => {
  return (
      <NavigationContainer>
        {/* <StatusBar hidden /> */}
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: ()=>null
            }}
          >
              <Stack.Screen
                  name="Home"
                  component={FirstPage}
              />
              <Stack.Screen
                  name="salonList"
                  component={SalonList}
              />
              <Stack.Screen
                  name="salonListDetail"
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
              <Stack.Screen
                name='flatList'
                component={FlatApp}
              />
              <Stack.Screen
                name='shopApp'
                component={ShopApp}
              />
          </Stack.Navigator>
      </NavigationContainer>
    )
};