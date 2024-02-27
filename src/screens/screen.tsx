import { AppIconsPack } from "@/components/common/AppIcon";
import { BottomNavigater } from "@/navigaters/BottomNavigater";
import {
  Avatar,
  IconRegistry,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

interface Props {
  children: JSX.Element | JSX.Element[];
  [k: string]: any;
}

const Screen = ({ children, ...otherProps }: Props) => {
  return (
    <Layout
      style={{
        flex: 1,
        flexGrow: 1,
        paddingTop: Constants.statusBarHeight,
      }}
      {...otherProps}
    >
      <IconRegistry icons={AppIconsPack} />
      <StatusBar style={"dark"} />
      <TopNavigation
        title={process.env.EXPO_PUBLIC_COMAPNY_NAME}
        accessoryRight={() => (
          <Avatar
            source={require("../../assets/logo.png")}
            style={{ borderRadius: 0, padding: 10 }}
          />
        )}
        style={{ backgroundColor: "gray" }}
      />
      <ScrollView style={{ flex: 1, flexGrow: 1 }}>{children}</ScrollView>
      <BottomNavigater />
    </Layout>
  );
};

export default Screen;
