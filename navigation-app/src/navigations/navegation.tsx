// importa los Screen
import HomeScreen from "../screens/homeScreen";
import DetailsScreen from "../screens/detailsScreen";
import SettingScreen from "../screens/settingScreen";
import StacksScreen from "../screens/stacksScreen";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "@expo/vector-icons/Entypo";
// import el Stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// crear objeto de l bottom menu
const Tab = createBottomTabNavigator();

// Crear la funcion cargar el objecto Tab
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MyStack} 
      
      options=
      {{
        headerLeft: () => <Entypo name="home" size={24} color="black" />,
        tabBarIcon: ({ color, size }) => (
          <Entypo name="home" size={24} color="black" />
        ),
        tabBarBadge: 10,
      }}
      />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}
const HomeStackNavigator = createNativeStackNavigator();
function MyStack(){
    return(
        <HomeStackNavigator.Navigator initialRouteName="Home">
            <HomeStackNavigator.Screen name="Home" component={HomeScreen} />
            <HomeStackNavigator.Screen name="Details" component={DetailsScreen} />
            <HomeStackNavigator.Screen name="Setting" component={SettingScreen} />
            <HomeStackNavigator.Screen name="Stacks" component={StacksScreen} />
        </HomeStackNavigator.Navigator>
    )
}
export default function Navigation() {
  return (
    <NavigationContainer>
    <MyTabs/>
    {/* <MyStack/> */}
    </NavigationContainer>
  )
}

