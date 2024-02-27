import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import React from "react";

export const BottomNavigater = (): React.ReactElement => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}
    >
      <BottomNavigationTab icon={<Icon name="user" />} title="Profile" />
      <BottomNavigationTab icon={<Icon name="home" />} title="Home" />
      <BottomNavigationTab icon={<Icon name="bell" />} title="Notification" />
      <BottomNavigationTab icon={<Icon name="bell" />} title="Barcode" />
    </BottomNavigation>
  );
};
