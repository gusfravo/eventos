import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

  import { backgroundStyle } from '../../shared/style/background.style';
import SearchInput from './components/SearchInput';
import { WHITE_SMOKE } from '../../shared/constants';

function HomeScreen(): React.JSX.Element {
    return (
        <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
            <View style={styleHome.container}>
                <SearchInput></SearchInput>
                <Text>
                    Hola Test Prubando {backgroundStyle.backgroundColor}
                </Text>
            </View>
        </ScrollView>
    );
}

export default HomeScreen;

const styleHome = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16,
        paddingVertical:16,
        backgroundColor:WHITE_SMOKE
    }
});