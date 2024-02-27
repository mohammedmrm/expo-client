import Home from "@/screens/Home";
import Profile from "@/screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Home} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
