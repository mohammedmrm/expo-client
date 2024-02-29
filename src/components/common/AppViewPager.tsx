import { Layout, ViewPager, ViewPagerProps } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import theme from "../../../assets/theme.json";
export const AppViewPager = ({
  ...props
}: ViewPagerProps): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const data = [
    {
      image: "https://picsum.photos/300/192?anmils",
      title: "Ad title 1",
      description: "Ad description",
    },
    {
      image: "https://picsum.photos/300/192?dogs",
      title: "Ad title 2",
      description: "Ad description 3",
    },
    {
      image: "https://picsum.photos/300/192?cat",
      title: "Ad title 3",
      description: "Ad description 3",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ViewPager
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
        {...props}
      >
        {data.map((ad, idx) => (
          <Layout style={styles.tab} key={idx}>
            <View style={styles.AdImage}>
              <ImageBackground
                source={{ uri: ad.image }} // Replace this with your image path
                style={styles.background}
              >
                <View style={styles.dotContainer}>
                  {data.map((ad, idx) => {
                    return idx === selectedIndex ? (
                      <View style={[styles.dot, styles.active]} />
                    ) : (
                      <View style={styles.dot} />
                    );
                  })}
                </View>
              </ImageBackground>
            </View>
          </Layout>
        ))}
      </ViewPager>
    </>
  );
};

const styles = StyleSheet.create({
  tab: {
    overflow: "hidden",
    height: 192,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    resizeMode: "contain",
    alignContent: "center",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
  AdImage: {
    width: "100%",
    height: "100%",
  },
  dotContainer: {
    position: "absolute",
    bottom: 10, // Adjust this value as needed to change the vertical position of the dots
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: theme["color-basic-500"],
    opacity: 0.7,
  },
  active: {
    width: 10,
    height: 10,
    borderRadius: 100,
    backgroundColor: theme["color-primary-500"],
    opacity: 0.8,
  },
});
