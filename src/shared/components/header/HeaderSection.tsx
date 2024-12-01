import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DEEP_GRAY,TRANSPARENT,WHITE_SMOKE } from '../../constants';
import { backgroundStyle } from '../../style/background.style';
import IconView from '../IconView/IconView';

function HeaderSection({title}:{title:string}):React.JSX.Element {
    return(
        <SafeAreaView style={styleHeader.headerContainer}>
            <View style={styleHeader.headerContainer}>
                <View style={styleHeader.headerSection}>
                    <Text style={styleHeader.title}>{title}</Text>
                    <IconView icon={'solar:add-circle-broken'} iconViewOptions={{background:TRANSPARENT, width:36, height:36,color:DEEP_GRAY}}/>
                </View>
            </View>
        </SafeAreaView>

    );
}

const styleHeader = StyleSheet.create({
    headerContainer:{
        padding:10,
        height:60,
        backgroundColor:backgroundStyle.backgroundColor
    },
    headerSection:{
        flex:1,
        // backgroundColor: "#495057",
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    title:{
        fontSize:32,
        fontWeight:600,
        // backgroundColor: "#ea638c",
        width:'60%',
        alignSelf:'center',
        color:DEEP_GRAY,
        fontFamily:'Nunito Black'
    }
});

export default HeaderSection;