import { useI18nContext } from "@/i18n/I18nContext";
import { Button, Text } from "@ui-kitten/components";
import { useTranslation } from "react-i18next";
import Screen from "./screen";

export default function Profile() {
  const { t } = useTranslation();
  const { setlng } = useI18nContext();
  return (
    <Screen>
      <Text>{t("language")}</Text>
      <Button onPress={() => setlng("en")}>Change Language to en</Button>
      <Button onPress={() => setlng("ar")}>Change Language to ar</Button>
      <Button onPress={() => setlng("ku")}>Change Language to ku</Button>
    </Screen>
  );
}
