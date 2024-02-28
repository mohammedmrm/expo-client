import { useMainContext } from "@/contexts/MainContext";
import Screen from "@/screens/screen";
import { Button, Text } from "@ui-kitten/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { setlng } = useMainContext();
  return (
    <Screen>
      <Text>This Home screen {t("language")}</Text>
      <Button onPress={() => setlng("en")}>Change Language to en</Button>
      <Button onPress={() => setlng("ar")}>Change Language to ar</Button>
    </Screen>
  );
}
