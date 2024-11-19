import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

  import { backgroundStyle } from '../../shared/style/background.style';

function HomeScreen(): React.JSX.Element {
    return (
        <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
            <View>
                <Text>
                    Hola Test Prubando {backgroundStyle.backgroundColor}
                </Text>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;