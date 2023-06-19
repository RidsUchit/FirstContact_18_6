import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
} from "react-native";
//import { createAppContainer } from 'react-navigation';

import { NavigationContainer } from "@react-navigation/native";
//import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import LoginScreen from "./src/screens/login";
import HomeScreen from "./src/screens/home";
//import NavigationScreen from './src/screens/navigation';
import SettingScreen from "./src/screens/settings";
import ProfileScreen from "./src/screens/profile";
import logo from "./assets/logo_fc.png";

const Tab = createBottomTabNavigator();
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "grey",

            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Settings") {
                iconName = focused ? "ios-list-sharp" : "ios-list";
              } else if (route.name === "Profile") {
                iconName = focused
                  ? "ios-person-circle"
                  : "ios-person-circle-outline";
              }
              <Ionicons name="" size={24} color="black" />;
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Dashboard",
              headerRight: () => (
                <TouchableOpacity>
                  <Ionicons
                    name="ios-notifications-outline"
                    size={30}
                    color="#5A5A5A"
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerLeft: () => (
                <TouchableOpacity /* onPress={() => navigation.goBack()} */>
                  <AntDesign
                    name="leftcircleo"
                    size={30}
                    color="#5A5A5A"
                    style={{ paddingLeft: 10 }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity>
                  <Ionicons
                    name="ios-notifications-outline"
                    size={30}
                    color="#5A5A5A"
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingScreen}
            options={{
              headerLeft: () => (
                <TouchableOpacity /* onPress={() => navigation.goBack()}  */>
                  <AntDesign
                    name="leftcircleo"
                    size={30}
                    color="#5A5A5A"
                    style={{ paddingLeft: 10 }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity>
                  <Ionicons
                    name="ios-notifications-outline"
                    size={30}
                    color="#5A5A5A"
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email / Username"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        {/* onPress={() => navigation.navigate('HomeScreen')} */}
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 400,
    height: 100,
    resizeMode: "center",
    backgroundColor: "#153455",
    marginBottom: 50,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "black",
    borderColor: "#333333",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#153455",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});

export default App;
