import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import HomeScreen from "../../screen/home.screen";
import HomeScreen from "../screen/home/HomeScreen"
import HeaderSection from "../shared/header/HeaderSection";
import { WHITE_SMOKE } from "../shared/constants";
import { backgroundStyle } from "../shared/style/background.style";

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>{
    return (
        <Tab.Navigator initialRouteName="Home"
        screenOptions={{
          header:({ navigation, route, options }) => {
            return <HeaderSection/>;
          },
          tabBarStyle:{
            backgroundColor:'#F2F2F2',
            borderColor:'#F2F2F2'
          }
        }}>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      );
}

export default TabNavigator;
