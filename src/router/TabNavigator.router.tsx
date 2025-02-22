import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/home/HomeScreen"
import NewEventScreen from "../screen/newEvent/NewEventScreen";
import HeaderSection from "../shared/components/header/HeaderSection";
import { HAPPY_BLUE } from "../shared/constants";
import eventIcon from "./components/EventIcon";
import settingsIcon from "./components/SettingsIcon";
import newIcon from "./components/NewIcon";
import { RootTabParamList, tabStackNavigatorScreenProps } from "./interfaces";

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = (stackNavigator: tabStackNavigatorScreenProps) => {

  const goToCreateEvent = () => {
    stackNavigator.navigation.navigate("main");
  }

  return (
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        header: ({ navigation, route, options }) => {
          // evento que envia al button de enviar a crear evento
          return <HeaderSection title={options.title!} createButtonClick={() => {
            navigation.navigate('New');
          }} />;

        },
        tabBarStyle: {
          backgroundColor: '#F2F2F2',
          borderColor: '#F2F2F2'
        },
        tabBarLabelStyle: {
          // display:'none'
        },
        tabBarActiveTintColor: HAPPY_BLUE,
        tabBarIconStyle: {
          borderStyle: 'solid',
          borderRadius: '50%',
          // borderColor:HAPPY_BLUE,
          // backgroundColor:HAPPY_BLUE+'17',
          // borderWidth:2,
          height: 42,
          width: 42,
        }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: 'Eventos',
        tabBarIcon: eventIcon
      }} />
      <Tab.Screen name="New" component={NewEventScreen} options={{
        title: 'Nuevo',
        tabBarIcon: newIcon
      }} />
      <Tab.Screen name="Settings" component={HomeScreen} options={{
        title: 'Configuración',
        tabBarIcon: settingsIcon,
      }} />
    </Tab.Navigator>
  );
}


export default TabNavigator;
