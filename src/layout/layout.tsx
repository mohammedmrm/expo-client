import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
interface Props {
  children: JSX.Element | JSX.Element[];
  [k: string]: any;
}

const Layout = ({ children, ...otherProps }: Props) => {
  return (
    <SafeAreaView
      style={{ flex: 1, top: Constants.statusBarHeight }}
      {...otherProps}
    >
      <StatusBar style="dark" />
      {children}
    </SafeAreaView>
  );
};

export default Layout;
