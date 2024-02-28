import { Icon, Input, InputProps } from "@ui-kitten/components";
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

export const AppInput = (props: InputProps): React.ReactElement => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const renderIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback
      onPress={() => setSecureTextEntry(!secureTextEntry)}
    >
      <Icon {...props} name={secureTextEntry ? "eye-slash" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return <Input {...props} />;
};
