import Screen from "@/screens/screen";
import { Text } from "@ui-kitten/components";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Screen>
      <Text>HH</Text>
    </Screen>
  );
}
