import { AppViewPager } from "@/components/common/AppViewPager";
import Screen from "@/screens/screen";
import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View } from "react-native";

export default function Login() {
  const { t } = useTranslation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}
    >
      <Icon {...props} name={secureTextEntry ? "eye-slash" : "eye"} />
    </TouchableWithoutFeedback>
  );
  return (
    <Screen>
      <Text>{t("screens.login.name")}</Text>
      <AppViewPager />
      <View style={style.formContainer}>
        <Input placeholder={t("screens.login.inputs.username")} />
        <Input
          placeholder={t("screens.login.inputs.password")}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
        />
        <Button>{t("screens.login.buttons.login")}</Button>
      </View>
    </Screen>
  );
}
const style = StyleSheet.create({
  formContainer: {
    gap: 2,
    margin: 5,
  },
});
