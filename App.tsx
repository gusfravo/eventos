import React from 'react';
import {
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/home.screen';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RootNavigate  from './src/router/RootNavigator.router';
import { DEEP_GRAY, WHITE_SMOKE } from './src/shared/constants';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? DEEP_GRAY : WHITE_SMOKE,
    flex:1
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
      />
        <NavigationContainer>
          <RootNavigate></RootNavigate>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;