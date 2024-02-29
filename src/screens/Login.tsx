import { AppViewPager } from "@/components/common/AppViewPager";
import { useThemeContext } from "@/contexts/themeContext";
import { useI18nContext } from "@/i18n/I18nContext";
import Screen from "@/screens/screen";
import { Button, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";

export default function Login() {
  const { t } = useTranslation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const { i18n } = useI18nContext();
  const { toggleTheme } = useThemeContext();
  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}
    >
      <Icon {...props} name={secureTextEntry ? "eye-slash" : "eye"} />
    </TouchableWithoutFeedback>
  );
  return (
    <Screen>
      <View style={styles.container}>
        <ImageBackground
          source={require("./../../assets/images/appbg.jpg")} // Replace this with your image path
          style={styles.background}
          blurRadius={10}
        >
          <AppViewPager style={{}} />

          <Layout style={[styles.formContainer]}>
            <Text style={styles.fromTitle}>
              {t("screens.login.labels.formTitle")}
            </Text>
            <Layout level="2" style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require("../../assets/logo.png")}
              />
            </Layout>
            <Input
              placeholder={t("screens.login.inputs.username")}
              keyboardType="number-pad"
            />
            <Input
              placeholder={t("screens.login.inputs.password")}
              accessoryLeft={renderIcon}
              secureTextEntry={secureTextEntry}
            />
            <Button style={{ marginVertical: 20 }}>
              {t("screens.login.buttons.login")}
            </Button>
            <Button
              onPress={() =>
                i18n.language == "en"
                  ? i18n.changeLanguage("ar")
                  : i18n.changeLanguage("en")
              }
            >
              Change Language
            </Button>
            <Button onPress={toggleTheme}>Change theme</Button>
          </Layout>
        </ImageBackground>
      </View>
    </Screen>
  );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    width: 120,
    margin: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    elevation: 10,
  },
  background: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: "cover",
  },
  formContainer: {
    gap: 2,
    margin: 5,
    padding: 5,
    borderRadius: 5,
    elevation: 10,
  },
  fromTitle: {
    alignSelf: "center",
    fontSize: 30,
    margin: 5,
  },
});
