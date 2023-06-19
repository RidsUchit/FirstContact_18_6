import React from "react";
import { View, FlatList } from "react-native";
import Dashboard from "./dashboardFlatlist";
const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Dashboard />
    </View>
  );
};

export default HomeScreen;
