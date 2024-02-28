import { NavigationContainer } from "@react-navigation/native";
import BottomNavigater from "./BottomNavigater";
import Login from "@/screens/Login";

export const AppNavigator = () => (
  <NavigationContainer>
    <Login />
  </NavigationContainer>
);
