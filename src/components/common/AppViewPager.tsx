import { Layout, Text, ViewPager, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";

export const AppViewPager = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const theme = useTheme();
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <Layout style={styles.tab} level="2">
        <View style={{ top: -15, left: -20, position: "absolute" }}>
          <View
            style={{
              backgroundColor: theme["color-primary-500"],
              height: 150,
              width: 150,
              borderRadius: 100,
              marginTop: -100,
              position: "absolute",
              opacity: 0.5,
            }}
          />
          <View
            style={{
              backgroundColor: theme["color-primary-600"],
              height: 150,
              width: 150,
              borderRadius: 100,
              marginLeft: -100,
              position: "absolute",
              opacity: 0.4,
            }}
          />
        </View>
      </Layout>
      <Layout style={styles.tab} level="2">
        <Text category="h5">ORDERS</Text>
      </Layout>
      <Layout style={styles.tab} level="2">
        <Text category="h5">TRANSACTIONS</Text>
      </Layout>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  tab: {
    overflow: "hidden",
    height: 192,
    alignItems: "center",
    justifyContent: "center",
  },
});
