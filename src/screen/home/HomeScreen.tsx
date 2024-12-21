import React from 'react';
import {
    StyleSheet,
  } from 'react-native';

import { backgroundStyle } from '../../shared/style/background.style';
import SearchInput from './components/SearchInput';
import ListEvents from './components/ListEvents';
import { WHITE_SMOKE } from '../../shared/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EDGES } from '../../shared/constants';
import { TabNavigatorScreenProps } from '../../router/interfaces';

function HomeScreen(tabNavigator:TabNavigatorScreenProps): React.JSX.Element {
    console.log(tabNavigator)
    return (
        <SafeAreaView style={styleHome.container} edges={EDGES}>
            <SearchInput></SearchInput>
            <ListEvents navigation={tabNavigator.navigation}></ListEvents>
        </SafeAreaView>
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