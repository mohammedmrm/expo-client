import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const AppIconsPack = {
  name: "FontAwesome",
  icons: createIconsMap(),
};

function createIconsMap() {
  return new Proxy(
    {},
    {
      get(target, name) {
        return IconProvider(name);
      },
    }
  );
}

const IconProvider = (name: string | symbol) => ({
  toReactElement: (props: any) => AppIcon({ name, ...props }),
});

function AppIcon({ name, style }: { name: string; style: any }) {
  const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
  return <Icon name={name} size={height} color={tintColor} style={iconStyle} />;
}
