import { AppIconsPack } from "@/components/common/AppIcon";
import { IconRegistry, Layout, useTheme } from "@ui-kitten/components";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";

interface Props {
  children: JSX.Element | JSX.Element[];
  [k: string]: any;
}

const Screen = ({ children, ...otherProps }: Props) => {
  const theme = useTheme();
  return (
    <Layout
      style={{
        flex: 1,
        flexGrow: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme["color-primary-500"],
      }}
      {...otherProps}
    >
      <IconRegistry icons={AppIconsPack} />
      <StatusBar style={"dark"} />
      <ScrollView style={{ flex: 1, flexGrow: 1, backgroundColor: "blue" }}>
        {children}
      </ScrollView>
    </Layout>
  );
};

export default Screen;
