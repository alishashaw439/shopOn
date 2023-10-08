import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "./screens/Home";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Admin } from "./screens/Admin";
import { Cart } from "./screens/Cart";

const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen  name="Admin" component={Admin} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator()
export const Routes = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="hometab" screenOptions={{headerShown:false}}>
            <Stack.Screen name="hometab" component={HomeTab}></Stack.Screen>
            <Stack.Screen name="cart" component={Cart}></Stack.Screen>
        </Stack.Navigator>
       </NavigationContainer>
    );
}