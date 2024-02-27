import { Button, Icon, Text } from "@ui-kitten/components";
import Screen from "./screen";

export default function Profile() {
  return (
    <Screen>
      <Button accessoryLeft={<Icon name="lock" />} size="small">
        عربي
      </Button>
      <Text>عربي محمد</Text>
      <Text>This my Profile</Text>
    </Screen>
  );
}
