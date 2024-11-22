import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';

import { backgroundStyle } from '../../shared/style/background.style';
import SearchInput from './components/SearchInput';
import ListEvents from './components/ListEvents';
import { WHITE_SMOKE } from '../../shared/constants';
import { SafeAreaView } from 'react-native-safe-area-context';

function HomeScreen(): React.JSX.Element {
    return (
        <SafeAreaView style={styleHome.container} edges={{top:'off',bottom:'off', right:'additive',left:'additive'}}>
            <SearchInput></SearchInput>
            <ListEvents></ListEvents>
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