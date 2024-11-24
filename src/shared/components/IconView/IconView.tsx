import React from "react";
import { StyleSheet, View } from "react-native";
import { Iconify } from 'react-native-iconify';
import { DEEP_GRAY } from "../../constants";

function IconView({icon}:{icon:string}):React.JSX.Element{
    return(
        <View style={iconViewStyle.container}>
            <Iconify icon={icon} style={iconViewStyle.icon}/>
        </View>
    );
}

//TODO: Como cambiar al tamaño del icon de forma dinamica
const iconViewStyle = StyleSheet.create({
    container:{
        borderRadius:8,
        padding:2,
        width:36,
        height:36,
        backgroundColor:DEEP_GRAY,
        borderWidth:0
    },
    icon:{
        color:'white',
        margin:'auto',
        width:32,
        height:32
    }
});

export default  IconView;