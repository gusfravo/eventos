import React from 'react';

import { StyleSheet, View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DEEP_GRAY,WHITE_SMOKE } from '../constants';
import { backgroundStyle } from '../style/background.style';

function HeaderSection():React.JSX.Element {
    return(
        <SafeAreaView style={styleHeader.headerContainer}>
            <View style={styleHeader.headerContainer}>
                <View style={styleHeader.headerSection}>
                    <Text style={styleHeader.title}>Eventos</Text>
                    <Image
                        style={styleHeader.image}
                        source={require('../../../assets/icons/new.png')}
                        />
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
        width:'50%',
        alignSelf:'center',
        color:DEEP_GRAY,
        fontFamily:'Nunito Black'
    },
    image:{
        width:36,
        height:36,
        resizeMode: 'cover'
    }
});

export default HeaderSection;