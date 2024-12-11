import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.router';
import EditEventScreen from '../screen/editEvent/EditEventScreen';
const Stack = createNativeStackNavigator();

const RootNavigate = ():React.JSX.Element=>{
    return(
        <Stack.Navigator initialRouteName='main' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="main" component={TabNavigator} />
            <Stack.Screen name="edit" component={EditEventScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigate;