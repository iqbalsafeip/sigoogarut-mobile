import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import store from './utils/redux/store'
import pages from './pages'
import { NativeBaseProvider } from 'native-base';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store} >
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Search'  >
            {
              pages.map((e, i) => (
                <Stack.Screen options={{ headerShown: false }} key={i} name={e.name} component={e.component} />
              ))
            }
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
