import React from 'react';
import { createNativeStackNavigator, NativeStackHeaderProps } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.router';
import DetailsEventScreen from '../screen/detailsEvent/DetailsEventScreen';
import { RootStackParamList } from './interfaces';
import HeaderStack from '../shared/components/headerStack/HeaderStack';
import AlertEventScreen from '../screen/alertEvent/AlertEventScreen';
import { RouteProp } from '@react-navigation/native';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigate = (): React.JSX.Element => {
  return (
    <Stack.Navigator initialRouteName='main' screenOptions={{
      header: ({ navigation, route, options }: NativeStackHeaderProps) => {
        return <HeaderStack route={route as RouteProp<RootStackParamList, 'details'>} />;
      }
    }}>
      <Stack.Screen name="main" component={TabNavigator} options={{
        headerShown: false, // Mostramos un encabezado para esta pantalla
      }} />
      <Stack.Screen name="details" component={DetailsEventScreen} options={{
        headerShown: true, // Mostramos un encabezado para esta pantalla
      }} />
      <Stack.Screen name="error" component={AlertEventScreen} options={{ headerShown: false }} ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default RootNavigate;
