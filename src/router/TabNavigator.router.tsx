import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from "../../screen/home.screen";
import HomeScreen from "../screen/home/HomeScreen"
import HeaderSection from "../shared/header/HeaderSection";

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
    return (
        <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          header:({ navigation, route, options }) => {
            return <HeaderSection/>;
          }
        }}>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      );
}

export default TabNavigator;
