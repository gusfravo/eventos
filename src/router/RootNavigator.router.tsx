import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.router';
import DetailsEventScreen from '../screen/detailsEvent/DetailsEventScreen';
import { RootStackParamList } from './interfaces';
import HeaderStack from '../shared/components/headerStack/HeaderStack';
const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigate = ():React.JSX.Element=>{
    return(
        <Stack.Navigator initialRouteName='main' screenOptions={{ 
            header:({ navigation, route, options }) => {           
                return <HeaderStack/>;
              }
         }}>
            <Stack.Screen name="main" component={TabNavigator} options={{
                    headerShown: false, // Mostramos un encabezado para esta pantalla
                }} />
            <Stack.Screen name="details" component={DetailsEventScreen} options={{
                    headerShown: true, // Mostramos un encabezado para esta pantalla
                }} />
        </Stack.Navigator>
    )
}

export default RootNavigate;