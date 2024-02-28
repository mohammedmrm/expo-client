import { AppIconsPack } from "@/components/common/AppIcon";
import { IconRegistry, Layout } from "@ui-kitten/components";
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
      <ScrollView style={{ flex: 1, flexGrow: 1 }}>{children}</ScrollView>
    </Layout>
  );
};

export default Screen;
