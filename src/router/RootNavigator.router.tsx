import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.router';

const Stack = createNativeStackNavigator();

const RootNavigate = ():React.JSX.Element=>{
    return(
        <Stack.Navigator initialRouteName='main' screenOptions={{ headerShown: false }}>
            <Stack.Screen name="main" component={TabNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigate;